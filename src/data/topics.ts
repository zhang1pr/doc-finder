import type { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: '1', title: 'Install the editor', product: 'XDocs',
    bodyXml: '<topic><title>Install the editor</title><p>Download the installer and run it.</p><note>Close other editors first.</note></topic>'
  },
  {
    id: '2', title: 'Create a map', product: 'XDocs',
    bodyXml: '<topic><title>Create a map</title><p>A map groups topics into a deliverable.</p></topic>'
  },
  {
    id: '3', title: 'Configure review workflow', product: 'XReview',
    bodyXml: '<topic><title>Configure review workflow</title><p>Assign reviewers to each topic.</p><note>Reviewers need an active account.</note></topic>'
  },
  {
    id: '4', title: 'Reuse content', product: 'XDocs',
    bodyXml: '<topic><title>Reuse content</title><p>Reference a shared topic instead of copying it.</p></topic>'
  },
  {
    id: '5', title: 'Publish to PDF', product: 'XDelivery',
    bodyXml: '<topic><title>Publish to PDF</title><p>Open the output menu and choose PDF.</p><note>Check output settings first.</note></topic>'
  },
  {
    id: '6', title: 'Manage users', product: 'XDelivery',
    bodyXml: '<topic><title>Manage users</title><p>Add users and assign roles in the admin page.</p></topic>'
  },
  {
    id: '7', title: 'Set up faceted search', product: 'XDelivery',
    bodyXml: '<topic><title>Set up faceted search</title><p>Choose which metadata fields appear as filters.</p></topic>'
  },
  {
    id: '8', title: 'Restrict content access', product: 'XDelivery',
    bodyXml: '<topic><title>Restrict content access</title><p>Limit topics to specific groups.</p><note>Changes apply after reindexing.</note></topic>'
  },
  { 
    id: '9', title: 'Approve a review', product: 'XReview',
    bodyXml: '<topic><title>Approve a review</title><p>Open the review and select Approve.</p><note>Approvals cannot be undone.</note></topic>' 
  },
];