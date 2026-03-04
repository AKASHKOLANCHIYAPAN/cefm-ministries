const fs = require('fs');
let code = fs.readFileSync('churches_data.js', 'utf8');

// 1. Rename the districts
code = code.replace(/"district": "T\.V\. Mali"/g, '"district": "Tiruvannamalai"');
code = code.replace(/"district": "Mali"/g, '"district": "Tiruvannamalai"');
code = code.replace(/"district": "Vellerm"/g, '"district": "Vellore"');
code = code.replace(/"district": "Tanjavore"/g, '"district": "Tanjore"');

// 2. Add the new church to the end of the TAMIL NADU array
const newChurch = `,
      {
        "no": 32,
        "name": "S. Simeon Jebaraj",
        "churchName": "CEFM Shalom Church",
        "address": "Shalom Church street, Manna Raja Kovil St, Thisayanvilai.",
        "district": "Tirunelveli"
      }
    ]
  }
};`;

code = code.replace(`
      }
    ]
  }
};`, newChurch);

fs.writeFileSync('churches_data.js', code);
console.log("Updates applied successfully.");
