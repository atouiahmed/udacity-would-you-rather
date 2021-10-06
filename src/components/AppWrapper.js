import React, {Component} from 'react';

class AppWrapper extends Component {
    render() {
        return (

            <div className="container">
               <div className="row justify-content-center">

                   <div className="col-md-5 pt-5">

                       {this.props.children}
                   </div>
               </div>
            </div>
        );
    }
}

export default AppWrapper;