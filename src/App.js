import React,{Component} from 'react';
import './App.css';
import Dropzone  from 'react-dropzone';

class App extends Component {
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }
  
  render() {
    const maxSize = 1048576;
    return (
      <div className="text-center mt-5">
        <Dropzone
          onDrop={this.onDrop}
          accept="image/jpeg, image/png"
          minSize={0}
          maxSize={maxSize}
          multiple = {false}
        >
          {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
            const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
            return (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "File type not accepted, sorry!"}
                {isFileTooLarge && (
                  <div className="text-danger mt-2">
                    File is too large.
                  </div>
                )}
              </div>
            )}
          }
        </Dropzone>
      </div>
    );
  }
}
export default App;