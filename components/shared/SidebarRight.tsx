import React from 'react'
import Tag from './Tag'

const SidebarRight = () => {
  return (
    <section className="sticky right-0 top-0 w-72 bg-gray-50 dark:bg-gray-900 
    pt-28 px-6 hidden lg:flex flex-col">
      <div>
        <h3 className="text-orange-400 font-semibold text-lg">Top Questions</h3>
      
        <div className="mt-7 flex flex-col gap-2"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-orange-400 font-semibold text-lg">Popular Tags</h3>
      
        <div className="mt-7 flex flex-col gap-4">
          <Tag
          id={'gkbgj'}
          name={'React'}
          totalCount={6}
          showCount={true}
          />
          <Tag
          id={'jgkbgj'}
          name={'React'}
          totalCount={6}
          showCount={true}
          />
        </div>
      </div>
    </section>
  )
}

export default SidebarRight