import * as React from "react";
import { Sampler } from "../../lilgit/sampler/";
import { VersionSampler } from "../sampler/version-sampler";
import { History } from "../../lilgit/history/";
import { NodeyOutput } from "../../lilgit/nodey/";
import GhostCellLabel from "./ghost-cell-label";
import { connect } from "react-redux";
import { verdantState } from "../redux/index";
import { ghostCellState } from "../redux/ghost";

type GhostCellOutput_Props = {
  id: number;
  history?: History;
  linkArtifact?: (name: string) => void;
} & Partial<ghostCellState>; // loaded via redux

class CellOutput extends React.Component<
  GhostCellOutput_Props,
  { sample: string }
> {
  constructor(props: GhostCellOutput_Props) {
    super(props);
    this.state = { sample: "" };
  }

  componentDidMount() {
    this.getSample();
  }

  render() {
    return (
      <div className="v-Verdant-GhostBook-cell-container">
        <GhostCellLabel id={this.props.id} />
        <div className="v-Verdant-GhostBook-cell-content">
          <div className="v-Verdant-GhostBook-cell">
            <div dangerouslySetInnerHTML={{ __html: this.state.sample }} />
          </div>
        </div>
      </div>
    );
  }

  async getSample() {
    let output = this.props.history.store.get(this.props.name) as NodeyOutput;
    if (output.raw.length > 0) {
      let outSample = await VersionSampler.sample(
        this.props.history,
        output,
        null,
        Sampler.NO_DIFF
      ); //TODO fix
      this.setState({ sample: outSample.outerHTML });
    }
  }
}

const mapStateToProps = (
  state: verdantState,
  ownProps: GhostCellOutput_Props
) => {
  let output = state.ghostCells[ownProps.id];
  return {
    ...ownProps,
    history: state.getHistory(),
    linkArtifact: state.link_artifact,
    ...output,
  };
};

const GhostCellOutput = connect(mapStateToProps)(CellOutput);

export default GhostCellOutput;
