import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPeaks } from "../actions/peakActions";

class PeakList extends Component {
  static propTypes = {
    getPeaks: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPeaks();
  }

  render() {
    const { peaks } = this.props;
    return (
      <Container className="peak-list-container">
        <h2>The Peaks</h2>
        {peaks.map(({ name, elevation, rank, href, imgUrl }) => (
          <ListGroup>
            <ListGroupItem className="peak-card">
              <img width="100px" src={imgUrl} alt={name} />
              <h3>{name}</h3>
              <p>Rank: {rank}</p>
              <p>Elevation: {elevation}</p>
              <Button color="primary" href={href} target="_blank">
                More Info
              </Button>
            </ListGroupItem>
          </ListGroup>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  peaks: state.peak.peaks
});

export default connect(
  mapStateToProps,
  { getPeaks }
)(PeakList);
