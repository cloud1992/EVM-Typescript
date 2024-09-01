## A Lightweight Ethereum Virtual Machine Implementation in TypeScript

### Overview

MiniEVM is a simplified implementation of the Ethereum Virtual Machine (EVM) written in TypeScript. This project aims to provide a basic understanding of how the EVM operates by recreating a smaller version of it. While it doesn't include all the features of the full EVM, it captures the core concepts and operations.

### Features

- Bytecode Execution: Supports basic Ethereum bytecode execution, including arithmetic, storage, and flow control operations.
- Stack and Memory Management: Implements EVM-like stack and memory handling to simulate contract execution.
- Gas Calculation: Basic gas consumption calculation for executed operations.
- Opcode Handling: Supports a subset of EVM opcodes to demonstrate key functionalities.
- State Management: Includes a simple state tree to manage storage state.

### How to run

`npm run dev bytecode gasLimit`
e.g
`npm run dev 0x6000600A576001600C575BFE5B6001 100000`
