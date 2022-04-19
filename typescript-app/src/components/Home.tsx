import * as React from "react";
interface MyProps {
    
}
 
interface MyState {
    
}
 
class Home extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <div>
                <h1>
                    Welcome to 1st room
                </h1>
            </div>
         );
    }
}
 
export default Home;