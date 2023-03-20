import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { BadgeComp } from "./Badge";
import { BadgeList, BadgeText, BadgeTitle, StdAlone } from "./style";

import ClockIcon from "../../assets/icons/badge_clock.svg";
import FaceBookIcon from "../../assets/icons/badge_fackbook.svg";
import GitHubIcon from "../../assets/icons/badge_github.svg";
import ChromeIcon from "../../assets/icons/badge_chrome.svg";

export class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countMin: 5,
      countMax: 98,
    };
  }

  render() {
    const setCount = ({ target }) => {
      if (this.state.countMax >= 99) {
        this.setState({
          countMax: "99+",
        });
      }
      if (target.name === "min") {
        if (this.state.countMin >= 1) {
          this.setState({
            countMin:
              target.innerText === "+"
                ? this.state.countMin + 1
                : this.state.countMin - 1,
          });
        } else if (target.innerText === "+") {
          this.setState({
            countMin: this.state.countMin + 1,
          });
        }
      } else {
        if (this.state.countMax <= 98) {
          this.setState({
            countMax:
              target.innerText === "+"
                ? this.state.countMax + 1
                : this.state.countMax - 1,
          });
        } else if (target.innerText === "-") {
          this.setState({
            countMax: parseInt(this.state.countMax) - 1,
          });
        }
      }
    };
    return (
      <>
        <BadgeTitle>Badge</BadgeTitle>
        <BadgeText>
          Small numerical value or status descriptor for UI elements.
        </BadgeText>
        <BadgeTitle>When To Use</BadgeTitle>
        <BadgeList>
          <li>
            Badge normally appears in proximity to notifications or user avatars
            with eye-catching appeal, typically displaying unread messages
            count.
          </li>
        </BadgeList>

        <LayoutWrapper>
          <LayoutContainer>
            <Card
              type="Basic badge"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <BadgeComp />
              <BadgeComp count="0" badge />
              <BadgeComp count="9" badge />
              <BadgeComp count="99+" badge />
            </Card>
            <Card
              type="Basic badge"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <BadgeComp icon={ClockIcon} badge />
              <BadgeComp icon={FaceBookIcon} badge />
              <BadgeComp icon={GitHubIcon} badge />
              <BadgeComp icon={ChromeIcon} badge />
            </Card>
            <Card
              type="Stand Alone"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <StdAlone>
                <BadgeComp bgColor="blue" stdAlone count="0" badge />
                <BadgeComp bgColor="orange" stdAlone count="88" badge />
                <BadgeComp stdAlone count="99+" badge />
              </StdAlone>
            </Card>
            <Card
              type="Stand Alone"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <BadgeComp bgColor="blue" count={this.state.countMin} badge />
                  <button onClick={setCount} name="min">
                    -
                  </button>
                  <button onClick={setCount} name="min">
                    +
                  </button>
                </div>
                <div>
                  <BadgeComp
                    bgColor="orange"
                    count={this.state.countMax}
                    badge
                  />
                  <button onClick={setCount} name="max">
                    -
                  </button>
                  <button onClick={setCount} name="max">
                    +
                  </button>
                </div>
              </div>
            </Card>
          </LayoutContainer>
          <LayoutContainer>
            <Card></Card>
          </LayoutContainer>
        </LayoutWrapper>
      </>
    );
  }
}
