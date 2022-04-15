---
id: org
title: Organization
sidebar_label: Overview
slug: /organization/org
---

Spheron Protocol lets you create one/multiple Organization accounts. The Organization will contain all their projects imported into it.
These accounts represent a group of people with shared ownership of projects, and there are many tools to manage subgroups of those people. Each organization has it's own separate billing associated with it.

## Steps to Create Organization

<font size="4"> <b>Step 1.</b> First go to the organization popup and click on <code>Create a Organization</code> </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/org-popup.png').default} />

<font size="4"> <b>Step 2.</b> You’ll need to name your organization and provide an username. Then you can invite other users to be part of the organization if you want to. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/org-create.png').default} />

:::tip
You can put up a rocking avatar for your organization.
:::

Follow these steps and you’ll soon be the owner of a brand-new organization.

## Members

Organizations are associated with individual people by way of members, which are simply a grouping of individual user accounts and repositories within the organization. People in the organization are assigned different roles based on the owner's own preference and each role has different powers attached to it.

The Members page shows the members and their roles present under the organization.

<img src={require('@site/static/img/3.0.0/members.png').default} />

### Roles

Spheron has implemented significant Roles for organization members to give finer Permission to the dashboard and other features in the platform.

Spheron organization offers three roles:

#### Owner

The creator of the organization will be given the owner role by default. An owner can make other members the owner, or the admin of the organization. The owner has the highest permission in the organization.

#### Admin

The admin has the second-highest permissions in the organization. Admin has permission to update billing details including upgrading and attaching wallet for payments.

#### Member

The member can only deploy projects and view details around them. When a member joins an organization, he will automatically be given a Member role by default. The Admin or Owner can then change his role.

### Invite Members

<font size="4"> <b>Step 1.</b> Click on <b>Add Members</b> and put the <b>email id</b> of the member to be added to the organization. Upon confirmation in the popup, the entered member will be added in the pending invite section.</font> <br/><br/>

:::info

New team members will get an email with a link to accept the invitation. You can enter several email addresses separated by commas (without spaces).

:::

<img src={require('@site/static/img/3.0.0/pending-invite.png').default} />

<font size="4"> <b>Step 2.</b> The member will receive an invitation mail from Spheron. <i>Please check your Spam folder as well if you cannot find it in your mailbox.</i> </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/invite-members.png').default} />

<font size="4"> <b>Step 3.</b> On clicking <code>Accept Invite</code>, you will be redirected to the Spheron login page. Login/Signup using your favourite provider. </font> <br/><br/>

Users won't be immediately added to the organization upon successful login. The invited user needs to wait till the payment to add the member to the organization is successful, then only the user gets added to the organization.
We also notify the invited users as well as admins of the organization via Spheron Notification about the invitation status.

After successful payment, the invited member will be removed from the `Pending Invite` section, and will be added under `Organization Members`

## Settings

### Organization Details

You can update your **Organization Username** and **Display/Team** name.

**Avatar** can also be updated in the settings tab.

<img src={require('@site/static/img/3.0.0/org-settings.png').default} />

### Archive project

Spheron protocol allows you to archive your organization's dormant projects that are no longer in use on a regular basis for long-term storage.

All the archived projects under the particular organization will be shown in the Settings tab for the organization. You can get all the project details when you click on the archived project.

<img src={require('@site/static/img/3.0.0/org-archive.png').default} />

You can also unarchive the selected project by going to the project settings and clicking on the Unarchive button. The project will be unarchived and will be shown in the dashboard as standard.
