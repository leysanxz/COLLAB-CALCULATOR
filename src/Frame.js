import React, { Component } from "react";

class Frame extends Component {
  klickButton = (x) => {
    this.props.klickButton(x.target.value);
  };

  render() {
    return (
      <>
        <input type="text" class="display" ></input>
        <div class="row">
          <button onClick={this.klickButton} value="C">
            C
          </button>
          <button onClick={this.klickButton} value="+/-">
            +/-
          </button>
          <button onClick={this.klickButton} value="%">
            %
          </button>
          <button onClick={this.klickButton} value="/" class="operator">
            ÷
          </button>
        </div>
        <div class="row">
          <button onClick={this.klickButton} value="7">
            7
          </button>
          <button onClick={this.klickButton} value="8">
            8
          </button>
          <button onClick={this.klickButton} value="9">
            9
          </button>
          <button onClick={this.klickButton} value="*" class="operator">
            X
          </button>
         
        </div>
        <div class="row">
          <button onClick={this.klickButton} value="4">
            4
          </button>
          <button onClick={this.klickButton} value="5">
            5
          </button>
          <button onClick={this.klickButton} value="6">
            6
          </button>
          <button onClick={this.klickButton} value="-" class="operator">
            -
          </button>
        </div>
        <div class="row">
          <button onClick={this.klickButton} value="1">
            1
          </button>
          <button onClick={this.klickButton} value="2">
            2
          </button>
          <button onClick={this.klickButton} value="3">
            3
          </button>
          <button onClick={this.klickButton} value="+" class="operator">
            +
          </button>
        </div>
        <div class="row">
          <button onClick={this.klickButton} value="0" class="angka0">
            0
          </button>
          <button onClick={this.klickButton} value=".">
            .
          </button>
          <button onClick={this.klickButton} value="del">
            del
          </button>
          <button onClick={this.klickButton} value="=" class="operator24">
            =
          </button>
        </div>
      </>
    );
  }
}

export default Frame;
