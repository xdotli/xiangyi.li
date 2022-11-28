import { useState, useEffect } from "react"

export default function ZstreamPage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/search/issues?q=repo:openshift/console repo:openshift/console-operator label:lgtm label:approved base:release-4.11 base:openshift-4.11 base:enterprise-4.11 is:open -label:cherry-pick-approved -repo:openshift/openshift-docs label:bugzilla/valid-bug label:jira/valid-bug -label:qe-approved `)
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
      <h1>{data.items['0'].url}</h1>      
    </div>
  )
}


