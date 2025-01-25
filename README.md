![readme-banner1](https://github.com/user-attachments/assets/7bb91f04-a0d3-485b-bc20-97aae3729564)

# Quantum Leap - a PayloadCMS theme

This is a demo theme for PayloadCMS based on [this excellent mockup](https://payloadcms.com/white-label-cms-admin-panel) on the Payload website. This theme is primarily focused on the Dashboard home and Login views.

## Preview video
[Login---Payload.webm](https://github.com/user-attachments/assets/a1fb84d9-c178-4774-99ac-cd11cdc8b284)


## Getting started
1. Clone this repo
2. Copy `.env.example` to `.env` and populate as needed
3. Run `pnpm dev`

## Navigating the files
The bulk of the theming is done in the `theme` folder where you have the `.scss` files. These are mostly overrides for existing Payload styles. There are various components included, the most interesting ones here are the `BeforeLogin`, `Dashboard`, `FeatureCard`, and `Nav` components as they make up the bulk of the dashboard view.

#### Some notes
- Light mode is not supported right now, this is meant to be just a simple demo of how easy it can be to customize virtually anything in the admin ui.
- The List/Edit views weren't the focus of this demo theme and may come at a later time.
- This is a simple demo that includes a theme for the admin ui only. There is not frontend application attached to this theme.

## Attributes

- **Database**: mongodb
- **Storage Adapter**: localDisk
