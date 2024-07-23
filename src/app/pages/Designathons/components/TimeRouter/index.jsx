import { Component } from "react";

class TimeRouter extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
        this.updateItem = () => {
            this.setState({ time: new Date() });
            this.setNextTimer();
        };
        this.setNextTimer = () => {
            let now = new Date();
            let selection = this.props.timeline[0];
            let next = null;
            for (let plan of this.props.timeline) {
                if (new Date(plan.start) < now) {
                    selection = plan;
                } else {
                    next = plan;
                    break;
                }
            }
            if (next != null) {
                let diff = new Date(next.start) - now;
                this.timer = setTimeout(this.updateItem, diff + 1000);
            }
        };
    }
    componentDidMount() {
        this.setNextTimer();
    }
    render() {
        let now = new Date();
        let selection = this.props.timeline[0];
        for (let plan of this.props.timeline) {
            if (new Date(plan.start) < now) {
                selection = plan;
            } else {
                break;
            }
        }
        return selection.item;
    }
}
