import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'

import remote from '/imports/api/remote'

const usePaginatedElements = ({ elementsName, Collection, condition = {} }) => {
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  let [elements, loading] = useTracker(() => {
    const subscription = remote.subscribe(elementsName + '.paginated', condition, limit, page)

    remote.call(elementsName + '.count', (_, response) => setTotal(response))
    
    return [Collection.find(condition, { createdAt: -1 }).fetch(), !subscription.ready()]
  })

  return [limit, setLimit, page, setPage, total, elements, loading]
}

export default usePaginatedElements