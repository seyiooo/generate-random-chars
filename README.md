<a id="readme-top"></a>

<br />
<h3 align="center">generate-random-chars</h3>

<p align="center">
    <br />
    <strong>Generate some random strings with ease.</strong>
</p>

<details>
    <summary>Table of contents</summary>
    <ol>
        <li>
            <a href="#installation">Installation</a>
        </li>
        <li>
            <a href="#usage">Usage</a>
        </li>
        <li>
            <a href="#charset-options">CharSet Options</a>
        </li>
        <li>
            <a href="#license">License</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ol>
</details>

## Installation

To install the module, run:

```bash
npm install generate-random-chars
```

<p align="right"><a href="#readme-top">top</a></p>

## Usage

Here's an example of how to use the module:

```js
const { CharSet, generateString } = require('generate-random-chars');

const result = generateString(
    16,
    CharSet.UpperCase | CharSet.Numerical
);

console.log(result); // -> "D04WRGK2PX1IYK5D"
```

<p align="right"><a href="#readme-top">top</a></p>

## CharSet Options

The `CharSet` object provides different character set options:

- `CharSet.UpperCase` - Uppercase letters (A-Z)
- `CharSet.LowerCase` - Lowercase letters (a-z)
- `CharSet.Numerical` - Numbers (0-9)
- `CharSet.Symbols` - Special symbols (!@#$%^&*()_+~|}{[]:;?><,./-=)

You can combine options using bitwise OR (`|`).

<p align="right"><a href="#readme-top">top</a></p>

## License

This project is licensed under the MIT License.

<p align="right"><a href="#readme-top">top</a></p>

## Contact

- sey.ioo @Discord

<p align="right"><a href="#readme-top">top</a></p>