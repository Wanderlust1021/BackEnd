# WanderLust

**https://wanderlust-ty.herokuapp.com**

# Endpoints

| HTTP | Endpoint | Description |
|------|----------|-------------|
|POST |/api/user/register |Allows a user to _register_ with a `username` & `password`, returns a json object that gives the `id` and their `username` |
|POST |/api/user/login |Allows a user to _login_ with a `username` & `password`, returns a `message` that welcomes the user with their `username` and returns the `token` |
|GET |/api/user |Allows a _logged in_ user a list view of all `users` (for **ADMIN** use) | 
|POST |/api/org/register |Allows an organizer to _register_ with a `org_name` & `password`, returns a json object that gives the `id` and their `org_name` |
|POST |/api/org/login |Allows an organizer to _login_ with a `org_name` & `password`, will return a `message` that welcomes the organizer with their `org_name` and returns the `token` |
|GET |/api/org | Allows a _logged in_ user a list view of all `organizers` (for **ADMIN** use) |
|GET |/api/exp/:id |Allows a _logged in_ user or organizer to see all `experiences` specfic to an organizer `id` |
|POST |/api/org/:id/exp |Allows a _logged in_ organizer to edit their `experiences`, takes in `experience_title`, `experience_desc`, `date` (YYYY-MM-DD) and can take in an `image` |
|GET |/api/exp |Allows anyone access to _view_ all `experiences` |
|PUT |/api/exp/:id | Allows a _logged in_ orgranizer to _edit_ their `experience`, takes in the experience `id` |
|DELETE |api/exp/:id | Allows a _logged in_ organizer to _delete_ their `experience`, takes in the experience `id` |

## Successful Registration (USER)
```json
[
    {
    "id": 1,
    "username": "Testing"
    }
]
```

## Successful Login (User)
```json
[
    {
    "message": "Welcome Testing",
    "token": "..."
    }
]
```

## View all Users
```json
[
    {
    "id": 1,
    "username": "Testing",
    "password": "..."
    },
    {
    "id": 2,
    "username": "Please Work",
    "password": "..."
    }
]
```

## Successful Register (Organizer)
```json
[
    {
    "id": 1,
    "org_name": "Wanderlust Team"
    }
]
```

## Success Login (Organizer)
```json 
[
    {
    "message": "Welcome Wanderlust Team",
    "token": "..."
    }
]
```

## View all Organizers
```json
[
    {
    "id": 1,
    "org_name": "Wanderlust Team",
    "password": "$2a$08$R3KRKW1goHHH67OgPF9YouTqdn0s2Hv6r3CIdTcycE6u8X9yduqZy"
    },
    {
    "id": 2,
    "org_name": "Lambda School",
    "password": "$2a$08$X8/pupBK/0g0C87EZ5NbseyOXQj/6JIHmIh7szH83chSDgL94w6Wu"
    }
]
```

## Checking Organizer Specific Experiences
```json
[
    {
    "org_name": "Wanderlust Team",
    "experience_title": "Build a ReadMe",
    "experience_desc": "Going to make this clean so my team can be successful!",
    "date": "2019-10-20",
    "image": null
    }
]
```

## Successfully adding a new Experience 
```json
[
  2
]
```

## Viewing all Experiences 
```json
[
    {
    "org_name": "Wanderlust Team",
    "experience_title": "Build a ReadMe",
    "experience_desc": "Going to make this clean so my team can be successful!",
    "date": "2019-10-20",
    "image": null
    },
    {
    "org_name": "Lambda School",
    "experience_title": "Build Week",
    "experience_desc": "Students will work in teams to test their recently learned skills and create web application",
    "date": "2019-10-21",
    "image": null
    }
]
```

## Successfully editing an Experience
```json
[
    {
    "message": "Experience has been updated!"
    }
]
```

## Successfull deleteing an Experience 
```json
[
    {
    "message": "Experience has been deleted"
    }
]
```

**TOKENS EXPIRE AFTER 24H**