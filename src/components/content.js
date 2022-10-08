import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import { AnimatePresence, motion } from "framer-motion";
import employees from './employee';
import EmpCard from './EmpCard';
export default function ContentComponent(){
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