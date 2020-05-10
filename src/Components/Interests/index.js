import React, { Component } from "react";
import "./index.scss";
import Card from "../Card";

class Interests extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page-content interests">
        <Card
          title="Listening"
          items={[
            {
              title: "Reply All (podcast)",
              link: "https://gimletmedia.com/shows/reply-all"
            },
            {
              title: 'Tennis (band)',
              link: "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM"
            },
            {
              title: 'Papooz (band)',
              link: 'https://open.spotify.com/artist/2gaCpvhi31OZtozJKsr5gm'
            }
          ]}
        />
        <Card
          title="Watching"
          items={[{ title: "The West Wing" }, { title: "Seinfeld" }, { title: "Buffy the Vampire Slayer" }]}
        />
        <Card title="Reading" items={[{ title: "Song of Solomon" }]} />
      </div>
    );
  }
}

export default Interests;
