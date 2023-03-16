import { React,Component } from "react";
import { connect } from 'react-redux';

export class BeatSaber extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Beat Saber</h1>
            </div>
        );
    }
}

// export default Stats;
const mapStateToProps = (state) => ({
    
   });
   
   const mapDispatchToProps = {
     
   };
   
   export default connect(mapStateToProps, mapDispatchToProps)(BeatSaber);