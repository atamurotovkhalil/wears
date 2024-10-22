import React from 'react'



function FilterProduct(props) {

  function onFilterValueChanged(event) {
    props.filterValueSelected(event.target.value)
  }

  return (
    <div 
    data-aos="fade-up"
    className='border p-1 rounded-md text-xs sm:text-xl'>
        <select name='isAvailable' 
        onChange={onFilterValueChanged}
        className='dark:bg-gray-800 dark:text-white border border-gray-900 rounded-md '>
            <option value='all'>All</option>
            <option value='available'>Available</option>
            <option value='unavailable'>Unavailable</option>
        </select>
    </div>
  )
}

export default FilterProduct