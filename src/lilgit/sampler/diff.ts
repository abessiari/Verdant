import * as JSDiff from "diff";
import { RenderBaby } from "../jupyter-hooks/render-baby";
import {
  Nodey,
  NodeyCode,
  NodeyMarkdown,
  NodeyOutput,
  NodeyRawCell,
} from "../nodey";
import { Sampler } from "./sampler";
import { History } from "../history";

export enum DIFF_TYPE {
  NO_DIFF,
  CHANGE_DIFF,
  PRESENT_DIFF,
}

const CHANGE_SAME_CLASS = "v-Verdant-sampler-code-same";
const CHANGE_ADDED_CLASS = "v-Verdant-sampler-code-added";
const CHANGE_REMOVED_CLASS = "v-Verdant-sampler-code-removed";
const MARKDOWN_LINEBREAK = "v-Verdant-sampler-markdown-linebreak";

const MAX_WORD_DIFFS = 4;

export class Diff {
  private readonly sampler: Sampler;
  private readonly history: History;
  private readonly renderBaby: RenderBaby;

  constructor(sampler: Sampler) {
    this.sampler = sampler;
    this.history = sampler.history;
    this.renderBaby = sampler.renderBaby;
  }

  async render(
    nodey: Nodey,
    elem: HTMLElement,
    diffKind: number = DIFF_TYPE.NO_DIFF,
    relativeToNotebook?: number
  ) {
    if (nodey instanceof NodeyCode) {
      this.diffCode(nodey, elem, diffKind, relativeToNotebook);
    } else if (nodey instanceof NodeyMarkdown) {
      await this.diffMarkdown(nodey, elem, diffKind, relativeToNotebook);
    } else if (nodey instanceof NodeyRawCell) {
      // raw can be treated the same as code
      this.diffCode(nodey, elem, diffKind, relativeToNotebook);
    } else if (nodey instanceof NodeyOutput) {
      await this.diffOutput(nodey, elem, diffKind, relativeToNotebook);
    }
  }

  private getOldNewText(
    nodey: Nodey,
    diffKind: DIFF_TYPE,
    relativeToNotebook?: number
  ): [string, string, DIFF_TYPE] {
    // first get text of the current nodey
    let newText = this.sampler.renderNode(nodey);

    // now get text of prior nodey
    let [priorNodey, fixedDiffKind] = this.getPrior(
      nodey,
      diffKind,
      relativeToNotebook
    );
    let oldText = ""; // default to no string if no prior nodey

    // otherwise make oldText the value of priorNodey
    if (priorNodey) oldText = this.sampler.renderNode(priorNodey);

    return [newText, oldText, fixedDiffKind];
  }

  private getPrior(
    nodey: Nodey,
    diffKind: DIFF_TYPE,
    relativeToNotebook?: number
  ): [Nodey | undefined, DIFF_TYPE] {
    // now get text of prior nodey
    let nodeyHistory = this.history.store?.getHistoryOf(nodey);
    let priorNodey = undefined;

    if (diffKind === DIFF_TYPE.CHANGE_DIFF) {
      priorNodey = nodeyHistory?.getVersion(nodey.version - 1);

      /*
       * If relative to a checkpoint, check that changes to this nodey occurs
       * no earlier than the checkpoint immediately previous so that we
       * don't get irrelevant old changes showing up in diffs (ghost book only)
       */
      if (relativeToNotebook !== undefined) {
        let notebook = this.history?.store.getNotebookOf(nodey);
        if (notebook.version < relativeToNotebook) {
          priorNodey = undefined;
          diffKind = DIFF_TYPE.NO_DIFF;
        }
      }
    } else if (diffKind === DIFF_TYPE.PRESENT_DIFF) {
      priorNodey = nodeyHistory?.latest;
    }

    return [priorNodey, diffKind];
  }

  private diffCode(
    nodey: Nodey,
    elem: HTMLElement,
    diffKind: number = DIFF_TYPE.NO_DIFF,
    relativeToNotebook?: number
  ) {
    let [newText, oldText, fixedDiffKind] = this.getOldNewText(
      nodey,
      diffKind,
      relativeToNotebook
    );
    diffKind = fixedDiffKind;

    // If no diff necessary, use plain code
    if (diffKind === DIFF_TYPE.NO_DIFF) {
      return this.sampler.plainCode(elem, newText);
    }

    return this.diffText(oldText, newText, elem);
  }

  diffText(oldText: string, newText: string, elem: HTMLElement) {
    // Split new text into lines
    let newLines = newText.split("\n");

    // Split old text into lines
    let oldLines = oldText.split("\n");

    // Loop over lines and append diffs to elem
    const maxLength = Math.max(newLines.length, oldLines.length);
    for (let i = 0; i < maxLength; i++) {
      let newLine = newLines[i] || "";
      let oldLine = oldLines[i] || "";
      elem.appendChild(this.diffLine(oldLine, newLine));
    }

    return elem;
  }

  diffLine(oldText: string, newText: string) {
    /* Diffs a single line. */
    let line = document.createElement("div");
    let innerHTML = "";
    let diff = JSDiff.diffWords(oldText, newText);
    if (diff.length > MAX_WORD_DIFFS) diff = JSDiff.diffLines(oldText, newText);
    diff.forEach((part) => {
      let partDiv = document.createElement("span");
      //log("DIFF", part);
      partDiv.textContent = part.value;
      if (part.added) {
        partDiv.classList.add(CHANGE_ADDED_CLASS);
        innerHTML += partDiv.outerHTML;
      } else if (part.removed) {
        partDiv.classList.add(CHANGE_REMOVED_CLASS);
        innerHTML += partDiv.outerHTML;
      } else {
        innerHTML += part.value;
      }
    });
    line.innerHTML = innerHTML;
    return line;
  }

  async diffMarkdown(
    nodey: NodeyMarkdown,
    elem: HTMLElement,
    diffKind: number = DIFF_TYPE.NO_DIFF,
    relativeToNotebook?: number
  ) {
    let [newText, oldText, fixedDiffKind] = this.getOldNewText(
      nodey,
      diffKind,
      relativeToNotebook
    );
    diffKind = fixedDiffKind;

    // If no diff necessary, use plain markdown
    if (diffKind === DIFF_TYPE.NO_DIFF)
      await this.renderBaby.renderMarkdown(elem, newText);
    else {
      let diff = JSDiff.diffWords(oldText, newText);
      if (diff.length > MAX_WORD_DIFFS) {
        diff = JSDiff.diffLines(oldText, newText, { newlineIsToken: true });
      }
      const divs = diff.map(async (part) => {
        let partDiv: HTMLElement;
        if (part.value === "\n") {
          partDiv = document.createElement("br");
          partDiv.classList.add(MARKDOWN_LINEBREAK);
        } else {
          partDiv = document.createElement("span");
          await this.renderBaby.renderMarkdown(partDiv, part.value);

          partDiv.classList.add(CHANGE_SAME_CLASS);

          if (part.added) {
            partDiv.classList.add(CHANGE_ADDED_CLASS);
          } else if (part.removed) {
            partDiv.classList.add(CHANGE_REMOVED_CLASS);
          }
        }
        return partDiv;
      });

      await Promise.all(divs).then((elems) =>
        elems.forEach((e) => elem.appendChild(e))
      );
    }

    return elem;
  }

  async diffOutput(
    nodey: NodeyOutput,
    elem: HTMLElement,
    diffKind: number = DIFF_TYPE.NO_DIFF,
    relativeToNotebook?: number
  ) {
    /*const [priorNodey, fixedDiffType] = this.getPrior(
      nodey,
      diffKind,
      relativeToNotebook
    );*/

    //if (fixedDiffType === DIFF_TYPE.NO_DIFF)
    await this.sampler.renderOutput(nodey, elem);
    /*else {
      await Promise.all(
        nodey.raw.map(async (raw, index) => {
          const plaintext = this.renderBaby.plaintextOutput(raw);
          if (plaintext) {
            // now get text of prior nodey
            let oldText = ""; // default to no string if no prior nodey
            if (priorNodey && priorNodey instanceof NodeyOutput)
              oldText = this.renderBaby.plaintextOutput(priorNodey.raw[index]);

            elem = this.diffText(oldText, plaintext, elem);
          } else {
            // no plaintext, just render
            const part = await this.renderBaby.renderOutputRaw(raw);
            elem.appendChild(part.node);
          }
        })
      );
    }*/

    return elem;
  }
}
