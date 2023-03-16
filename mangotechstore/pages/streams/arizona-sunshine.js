import { React,Component } from "react";
import { connect } from 'react-redux';

export class ArizonaSunshine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Arizona Sunshine</h1>
            </div>
        );
    }
}

// export default Stats;
const mapStateToProps = (state) => ({
    
   });
   
   const mapDispatchToProps = {
     
   };
   
   export default connect(mapStateToProps, mapDispatchToProps)(ArizonaSunshine);