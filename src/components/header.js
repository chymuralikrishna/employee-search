import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import { AnimatePresence, motion } from "framer-motion";
import employees from './employee';
import EmpCard from './EmpCard';
 
const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
 
export default class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    
    const filteredEmployee = employees.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div className="displaytodos">
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <AnimatePresence>
        {filteredEmployee.map(emp => {
          return (
                <EmpCard key={emp.ecno} item={emp} />
          )
        })}
        </AnimatePresence>
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
 