import * as React from "react";
import { Nodey } from "../../../lilgit/nodey/";
import { History } from "../../../lilgit/history/";
import { DIFF_TYPE } from "../../../lilgit/sampler";
import VersionHeader from "./version-header";
import { verdantState, selectArtifactDetail } from "../../redux/";
import { connect } from "react-redux";

export type Version_Props = {
  history: History;
  nodey: Nodey;
  no_header?: boolean;
  selectArtifact: () => void;
  selected: boolean;
};

class VersionDetail extends React.Component<Version_Props, { sample: string }> {
  myRef: React.RefObject<HTMLDivElement>;

  constructor(props: Version_Props) {
    super(props);
    this.state = {
      sample: "",
    };
    this.myRef = React.createRef<HTMLDivElement>(); // todo test
  }

  componentDidMount() {
    this.getSample();
    if (this.props.selected) {
      setTimeout(() => {
        if (this.myRef.current)
          this.myRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
      }, 1000);
    }
  }

  componentDidUpdate(prevProps: Version_Props) {
    if (this.props.nodey.name != prevProps.nodey.name) this.getSample();
  }

  render() {
    return (
      <div
        ref={this.myRef}
        className="v-VerdantPanel-details-version"
        onClick={() => this.props.selectArtifact()}
      >
        {this.showHeader()}
        <div
          className="v-VerdantPanel-details-version-sample"
          dangerouslySetInnerHTML={{ __html: this.state.sample }}
        ></div>
      </div>
    );
  }

  showHeader() {
    if (!this.props.no_header)
      return <VersionHeader nodey={this.props.nodey} />;
    return null;
  }

  async getSample() {
    await this.props.history.ready;
    let s: HTMLDivElement = await this.props.history.inspector.renderDiff(
      this.props.nodey,
      DIFF_TYPE.CHANGE_DIFF
    );
    this.setState({ sample: s.outerHTML });
  }
}

const mapDispatchToProps = (
  dispatch: any,
  ownProps: Partial<Version_Props>
) => {
  return {
    selectArtifact: () =>
      ownProps.nodey
        ? dispatch(selectArtifactDetail(ownProps.nodey.name))
        : null,
  };
};

const mapStateToProps = (
  state: verdantState,
  ownProps: Partial<Version_Props>
) => {
  return {
    history: state.getHistory(),
    no_header: ownProps.no_header,
    selected:
      ownProps.nodey?.name != undefined &&
      state.artifactView?.selectedArtifactDetail != undefined &&
      state.artifactView?.selectedArtifactDetail === ownProps.nodey?.name,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VersionDetail);
