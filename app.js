const contractAddress = "0x096caFE1463CDbb47B88Df6e5d9AD9603fC83349";
const abi = [ {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      }
    ],
    "name": "BookBorrowed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      }
    ],
    "name": "BookReturned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "title",
        "type": "string"
      }
    ],
    "name": "NewBookAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "copies",
        "type": "uint256"
      }
    ],
    "name": "NewCopiesAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_copies",
        "type": "uint256"
      }
    ],
    "name": "addBook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "borrowBook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAvailableBooks",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          }
        ],
        "internalType": "struct Library.AvailableBook[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "returnBook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  } ];
const provider = new ethers.providers.JsonRpcProvider("https://api.avax-test.network/ext/bc/C/rpc");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

async function addBook() {
    const bookTitle = document.getElementById("bookTitle").value;
    await contract.addBook(bookTitle, 1); // Assuming 1 copy is added
    updateBookList();
}

async function updateBookList() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    const availableBooks = await contract.getAvailableBooks();
    availableBooks.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book.title;
        bookList.appendChild(li);
    });
}

updateBookList(); // Initial update