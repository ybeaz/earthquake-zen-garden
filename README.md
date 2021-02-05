# Earthquake Zen Garden 

ver. 3.12.3
React Developer Skill Evaluation Exercise
This is a simple app that shows a homepage with a list of earthquakes. It has a header with a logo (link back to home), and a link to a profile detail view. Each entry in the table links to a detail view of that particular record. See the screens and reference data below.

# Technical details
* Solution is based on React
* The app has 3 main views and obtains data async with fetch from data.json mock file
* Only functional components are used together with React hooks
* React Router is chosen for navigation
* Redux store is not used. Justification: there is no necessity or requirements
* Clicking the logo in the header from any view will return to this view
* Clicking on one of the items in the list should take the user to the Detail View
* Clicking the welcome message in the header should take the user to the Profile View
* Clicking the column header should sort the data according to that column
* Clicking the column header successively should toggle the sort directions
