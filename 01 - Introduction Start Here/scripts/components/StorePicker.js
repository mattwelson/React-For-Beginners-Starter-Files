import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

// Store picker component
@reactMixin.decorate(History)
@autobind
class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.push(null,'/store/' + storeId);
  }
  render() {
     return (
        <form className="store-selector" onSubmit={ this.goToStore }>
         <h2>Please enter a store</h2>
         <input type="text" ref="storeId" required defaultValue={h.getFunName()} />
         <input type="submit" />
      </form>
    );
  }
};

export default StorePicker;