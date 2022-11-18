---
id: roles
titles: Roles
sidebar_label: Roles
slug: /organization/roles
---

Organizations are associated with individual people by way of members, which are simply a grouping of individual user accounts and repositories within the organization. People in the organization are assigned different roles based on the owner's own preference and each role has different powers attached to it.

The Members page shows the members and their roles present under the organization.

<img src={require('@site/static/img/3.0.0/orgmem.png').default} />

### Roles

Spheron has implemented significant Roles for organization members to give finer Permission to the dashboard and other features in the platform.

Spheron organization offers three roles: <b>Owner</b>, <b>Admin</b> and <b>Member</b>

### Powers of the Roles

#### Owner

The creator of the organization will be given the owner role by default. The owner has the highest permission in the organization.

- Deploy
- Remove permissions of other team members
- Add permissions of other team members
- Buy Bonus
- Subscribe to plans
- Invite users to the Organization
- Manage Wallet
- Manage Domains

#### Admin

The admin has the second-highest permissions in the organization.

- Deploy
- Buy Bonus
- Subscribe to plans
- Manage Domains

#### Member

The member can only deploy projects and view details around them. When a member joins an organization, he will automatically be given a Member role by default.

- Deploy

### Invite Members

<font size="4"> <b>Step 1.</b> Click on <b>Add Members</b> and put the <b>email id</b> of the member to be added to the organization. Upon confirmation in the popup, the entered member will be added in the pending invite section.</font> <br/><br/>

:::info

New team members will get an email with a link to accept the invitation. You can enter several email addresses separated by commas (without spaces).

:::
<img src={require('@site/static/img/3.0.0/invitem.png').default} />

<font size="4"> <b>Step 2.</b> The member will receive an invitation mail from Spheron. <i>Please check your Spam folder as well if you cannot find it in your mailbox.</i> </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/mememail.png').default} />

<font size="4"> <b>Step 3.</b> On clicking <code>Accept Invite</code>, you will be redirected to the Spheron login page. Login/Signup using your favourite provider. </font> <br/><br/>

Users won't be immediately added to the organization upon successful login. The invited user needs to wait till the payment to add the member to the organization is successful, then only the user gets added to the organization.
We also notify the invited users as well as admins of the organization via Spheron Notification about the invitation status.

After successful payment, the invited member will be removed from the `Pending Invite` section, and will be added under `Organization Members`
