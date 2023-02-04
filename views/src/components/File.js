import React from 'react';
function File(props) {
    function getExtension(filename) {
        return filename.split(".").pop();
    }
    return (
        <div>
            <div>
                <div className='task-container'>
                    <div className='task-container-background' style={getExtension(props.name) === "pcap" ? { backgroundColor: 'rgb(144,238,144, 0.5)' } : { backgroundColor: 'rgb(27,183,210,0.5)' }}>
                        <div className='task-term-container'>
                            <h2 className='task-term'>{props.name}</h2>
                        </div>
                        <div className='buttons-container'>
                            <button className='done-button'>
                                <a href={props.url}>Download</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default File;