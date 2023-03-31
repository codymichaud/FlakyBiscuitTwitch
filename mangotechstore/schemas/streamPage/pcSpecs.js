import { defineField, defineType } from 'sanity';

export default {
  name: 'pcSpecs',
  type: 'document',
  title: 'PC Specs',
  fields: [
    {
      name: 'pcCase',
      type: 'string',
      title: 'PC Case',
    },
    {
      name: 'pcCPU',
      type: 'string',
      title: 'PC CPU',
    },
    {
      name: 'pcMotherboard',
      type: 'string',
      title: 'PC Motherboard',
    },
    {
      name: 'pcRAM',
      type: 'string',
      title: 'PC RAM',
    },
    {
      name: 'pcGPU',
      type: 'string',
      title: 'PC GPU',
    },
    {
      name: 'pcPowerSupply',
      type: 'string',
      title: 'PC Power Supply',
    },
    {
      name: 'pcStorage',
      type: 'string',
      title: 'PC Storage',
    },
    {
      name: 'pcFans',
      type: 'string',
      title: 'PC Fans',
    },
    {
      name: 'pcCooler',
      type: 'string',
      title: 'PC Cooler',
    },
    {
      name: 'pcMonitors',
      type: 'string',
      title: 'PC Monitors',
    },
    {
      name: 'pcKeyboard',
      type: 'string',
      title: 'PC Keyboard',
    },
    {
      name: 'pcMouse',
      type: 'string',
      title: 'PC Mouse',
    },
    {
      name: 'pcHeadset',
      type: 'string',
      title: 'PC Headset',
    },
    {
      name: 'pcMic',
      type: 'string',
      title: 'PC Mic',
    },
  ],
};
