import React from 'react'

export default function Page() {
  return (
    <div className="flex w-full overflow-x-auto">
    <table className="table-compact table max-w-4xl">
      <thead>
        <tr>
          <th>ID</th>
          <th>ბრენდი</th>
          <th>მოდელი</th>
          <th>გამოშვების წელი</th>
          <th>VIN</th>
          <th>VIN-ის შემოწმება</th>
        </tr>
      </thead>
      <tbody>
          <tr className="cursor-pointer hover:bg-slate-950 !h-16">
            <td className='!h-16'>asdasdasd</td>
            <td className='!h-16'>asdasdasd</td>
            <td className='!h-16'>asdasdasd</td>
            <td className='!h-16'>asdasdasd</td>
            <td className='!h-16'>asdasdasd</td>
            <td className='!h-16'>
              <a
                href={`https://www.kbb.com/cars-for-sale/experian?SID=5021648&VIN=&brand=kbb&ps=false&make=MINI`}
                target="_blank"
                rel="noopener noreferrer"
                className='rounded bg-yellow-600 text-black px-1 py-2'
              >
                Check VIN
              </a>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
  )
}
