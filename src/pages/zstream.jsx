import { useState, useEffect } from "react"

export default function ZstreamPage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // Promise.all([
    //   fetch(`https://api.github.com/search/issues?q=repo:openshift/console repo:openshift/console-operator label:lgtm label:approved base:release-${4.11} base:openshift-${4.11} base:enterprise-${4.11} is:open -label:cherry-pick-approved -repo:openshift/openshift-docs label:bugzilla/valid-bug label:jira/valid-bug -label:qe-approved`),
    //   // fetch(`https://api.github.com/search/issues?q=repo:openshift/console repo:openshift/console-operator label:lgtm label:approved base:release-${'4.10'} base:openshift-${'4.10'} base:enterprise-${'4.10'} is:open -label:cherry-pick-approved -repo:openshift/openshift-docs label:bugzilla/valid-bug label:jira/valid-bug -label:qe-approved`),
    //   // fetch(`https://api.github.com/search/issues?q=repo:openshift/console repo:openshift/console-operator label:lgtm label:approved base:release-${4.9} base:openshift-${4.9} base:enterprise-${4.9} is:open -label:cherry-pick-approved -repo:openshift/openshift-docs label:bugzilla/valid-bug label:jira/valid-bug -label:qe-approved`),
    //   // fetch(`https://api.github.com/search/issues?q=repo:openshift/console repo:openshift/console-operator label:lgtm label:approved base:release-${4.8} base:openshift-${4.8} base:enterprise-${4.8} is:open -label:cherry-pick-approved -repo:openshift/openshift-docs label:bugzilla/valid-bug label:jira/valid-bug -label:qe-approved`),
    //   // fetch(`https://api.github.com/search/issues?q=repo:openshift/console repo:openshift/console-operator label:lgtm label:approved base:release-${4.7} base:openshift-${4.7} base:enterprise-${4.7} is:open -label:cherry-pick-approved -repo:openshift/openshift-docs label:bugzilla/valid-bug label:jira/valid-bug -label:qe-approved`)
    // ]).then((values) => {
    //   return values.map(value => value.json())
    // }).then((items) => {
    //   return items.map(item => Promise.resolve(item))
    // }).then((ds) => {
    //   setData(ds)
    //   setLoading(false)
    // })
    fetch(`https://api.github.com/search/issues?q=repo:openshift/console repo:openshift/console-operator label:lgtm label:approved base:release-${4.11} base:openshift-${4.11} base:enterprise-${4.11} is:open -label:cherry-pick-approved -repo:openshift/openshift-docs label:bugzilla/valid-bug label:jira/valid-bug -label:qe-approved`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])


  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <button>4.11</button>
      <h1>{data.items['0'].url}</h1>
      {/* <h1>{data[1].items['0'].url}</h1> */}
      {/* <h1>{data[2].items['0'].url}</h1> */}
      {/* <h1>{data[3].items['0'].url}</h1> */}
      {/* <h1>{data[4].items['0'].url}</h1> */}
    </div>
  )
}


