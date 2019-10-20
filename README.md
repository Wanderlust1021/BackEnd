# WanderLust

# Endpoints

| HTTP | Endpoint | Description |
|------|----------|-------------|
|POST |/api/user/register |Allows a user to _register_ with a `username` & `password`, returns a json object that gives the `id` and their `username` |
|POST |/api/user/register |Allows a user to _login_ with a `username` & `password`, returns a `message` that welcomes the user with their `username` and returns the `token` |
|GET |/api/user |Allows a _logged in_ user a list view of all `users` (for *ADMIN* use) | 
|POST |/api/org/register |Allows an organizer to _register_ with a `org_name` & `password`, returns a json object that gives the `id` and their `org_name` |
|POST |/api/org/login |Allows an organizer to _login_ with a `org_name` & `password`, will return a `message` that welcomes the organizer with their `org_name` and returns the `token` |
|GET |/api/org | Allows a _logged in_ user a list view of all `organizers` (for *ADMIN* use) |
|GET |/api/exp/:id |Allows a logged in user or organizer to see all `experiences` specfic to an organizer `id` |
|POST |/api/org/:id/exp |Allows a logged in organizer to edit their `experiences`, takes in `experience_title`, `experience_desc`, `date` (YYYY-MM-DD) and can take in an `image` |
|GET |/api/exp |Allows anyone access to _view_ all `experiences` |
|PUT |/api/exp/:id | Allows a _logged in_ orgranizer to edit their `experience`, takes in the experience `id` |
|DELETE |api/exp/:id | Allows a _logged in_ organizer to delete their `experience`, takes in the experience `id` |