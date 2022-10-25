# MJP Dashboard
Dashboard created for personal use of most used sites and programs.

## Setup config file
Create a `config.json` file in the `src` folder.

``` json
{
  // Title of dashboard
  "title": "Test Dashboard",
  // Enable time on header
  "showTime": true,
  "services": [
    {
      "name": "Name of category",
      "items": [
        {
          "name": "Name of program",
          "url": "https://url.com"
        },
        {
          "name": "Name of program",
          "url": "https://url.com"
        }
      ]
    },
    // Optional 2nd category
    {
      "name": "Name of 2nd category",
      "items": [
        {
          "name": "Name of program",
          "url": "https://url.com"
        },
        {
          "name": "Name of program",
          "url": "https://url.com"
        }
      ]
    },
    ...
  ]
}

```
