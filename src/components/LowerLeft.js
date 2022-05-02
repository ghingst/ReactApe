//links
import React, {Component} from 'react';

class LowerLeft extends Component {
    render() {
        return (
            <div id="LL-box">
                <div id="LL-box-content">
                    <span id="homepage" className="external-link">
                        <a href="../cs3220.html">
                            Homepage
                        </a>
                    </span>
                    <span id="peoples-choice" className="external-link">
                        <a href="http://judah.cedarville.edu/index.php">
                            People's Choice
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default LowerLeft;