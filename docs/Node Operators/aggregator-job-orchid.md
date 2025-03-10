---
layout: nodes.liquid
date: Last Modified
title: "Aggregator Job (Orchid)"
permalink: "docs/aggregator-job-orchid/"
hidden: true
---
In order to contribute to the price aggregator contract, you will need to run one of the jobs on this page. The Chainlink team will let you know which API to provide, and you can use this page as a guide for adding jobs for each provider to your node.

First, add a test job to your node which uses the Web initiator so that you can validate that the job will run successfully. If the API requires an API key, replace `YOUR_API_KEY` with your own.

If using an <a href="https://chainlinkadapters.com/" target="_blank">external adapter</a>, follow [these instructions](../node-operators/) for adding that bridge to your node. Replace `YOUR_BRIDGE_NAME` with the name of your bridge in the job spec.
[block:code]
{
  "codes": [
    {
      "code": "{\n\t\"initiators\": [\n\t\t{\n\t\t\t\"type\": \"web\"\n\t\t}\n\t],\n\t\"tasks\": [\n\t\t{\n\t\t\t\"type\": \"httpget\",\n\t\t\t\"params\": {\n\t\t\t\t\"get\": \"https://chainlink.orchid.com/0\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\": \"multiply\",\n\t\t\t\"params\": {\n\t\t\t\t\"times\": 100000\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\": \"ethint256\"\n\t\t}\n\t]\n}",
      "language": "json",
      "name": "Test Job"
    }
  ]
}
[/block]
On the Job Spec Detail page for the job, click the Run button. You should see a green bar at the top that the node Successfully created job run <JobRunID>. Click on that Job Run ID and verify that all tasks have been Completed with green check marks.
[block:image]
{
  "images": [
    {
      "image": [
        "/files/8cfc185-Screenshot_from_2019-06-21_08-29-07.png",
        "Screenshot from 2019-06-21 08-29-07.png",
        1894,
        806,
        "#fafafb"
      ]
    }
  ]
}
[/block]
If the test job has ran successfully, add the following job to your node, replacing `YOUR_ORACLE_CONTRACT_ADDRESS` with your oracle contract address, and if required, replacing `YOUR_API_KEY` with yours as well.
[block:code]
{
  "codes": [
    {
      "code": "{\n\t\"initiators\": [\n\t\t{\n\t\t\t\"type\": \"runlog\",\n\t\t\t\"params\": {\n\t\t\t\t\"address\": \"YOUR_ORACLE_CONTRACT_ADDRESS\"\n\t\t\t}\n\t\t}\n\t],\n\t\"tasks\": [\n\t\t{\n\t\t\t\"type\": \"httpget\",\n\t\t\t\"params\": {\n\t\t\t\t\"get\": \"https://chainlink.orchid.com/0\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\": \"multiply\",\n\t\t\t\"params\": {\n\t\t\t\t\"times\": 100000\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\": \"ethint256\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"ethtx\"\n\t\t}\n\t]\n}",
      "language": "json",
      "name": "Job"
    }
  ]
}
[/block]
Once added, give the team the Job ID associated with the job above.

Make sure that your `MINIMUM_CONTRACT_PAYMENT_LINK_JUELS` environment variable is low enough to accept the payment amount from the aggregator contract on mainnet.
