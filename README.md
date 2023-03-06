# Meme Scrape API

This API based on this [website](https://lahelu.com/trending) and got simplified by myself

<hr />

## Route

<table border=1>
    <tr>
        <th>No</th>
        <th>Route</th>
        <th>Method</th>
        <th>Explain</th>
        <th>Example payload</th>
    </tr>
    <tr>
        <td>1</td>
        <td>/</td>
        <td>POST</td>
        <td>for getting trending meme</td>
        <td>
<pre>
{
    "page": 1
}
</pre>
</td>
    </tr>
    <tr>
        <td>2</td>
        <td>/category</td>
        <td>POST</td>
        <td>for getting meme based on category</td>
        <td>
<pre>
{
    "page": 1,
    "category":1
}
</pre>

</td>
    </tr>
</table>

<hr />

## Categories

```
[
  {
    id: 0,
    name: "Funny",
  },
  {
    id: 1,
    name: "Dark",
  },
  {
    id: 2,
    name: "Gaming",
  },
  {
    id: 4,
    name: "Fact",
  },
  {
    id: 7,
    name: "News",
  },
  {
    id: 8,
    name: "Drama",
  },
  {
    id: 11,
    name: "Animals",
  },
];
```

<hr />

## Steps for use this project for your own projects

1. Clone this project <br />
   `https://github.com/VirtualPetProjectTA/MemeAPIScrape.git`

2. Install Dependencies <br />
   `npm i` or `npm i --legacy-peer-deps` or `npm i --force`

3. Run <br />
   `npm start`

<hr />

## Demo

You guys can try this API in this [Link]()
