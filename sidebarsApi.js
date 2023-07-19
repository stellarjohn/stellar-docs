// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  horizon: [
    {
      type: 'category',
      label: 'Horizon API',
      items: [
        {
          type: "autogenerated",
          dirName: "horizon",
        },
      ],
      collapsible: false,
    },
  ],
  anchor_platform: [
    {
      type: 'category',
      label: 'Anchor Platform API',
      items: [
        {
          type: "autogenerated",
          dirName: "anchor-platform",
        },
      ],
    }
  ],
  sdp: [
    {
      type: "category",
      label: "Stellar Disbursement Platform API",
      items: [
        {
          "type": "autogenerated",
          "dirName": "sdp"
        }
      ]
    }
  ]
}

module.exports = sidebars;
