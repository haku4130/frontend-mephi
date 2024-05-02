"use strict";
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BinarySearchTree.prototype.search = function (value) {
        return this.searchNode(this.root, value);
    };
    BinarySearchTree.prototype.searchNode = function (node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        }
        else if (value > node.value) {
            return this.searchNode(node.right, value);
        }
        else {
            return node;
        }
    };
    BinarySearchTree.prototype.delete = function (value) {
        this.root = this.deleteNode(this.root, value);
    };
    BinarySearchTree.prototype.deleteNode = function (node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        }
        else {
            if (node.left === null) {
                return node.right;
            }
            else if (node.right === null) {
                return node.left;
            }
            node.value = this.findMinValue(node.right);
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    };
    BinarySearchTree.prototype.findMinValue = function (node) {
        var current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    };
    BinarySearchTree.prototype.update = function (oldValue, newValue) {
        this.delete(oldValue);
        this.insert(newValue);
    };
    BinarySearchTree.prototype.getHeight = function () {
        return this.getNodeHeight(this.root);
    };
    BinarySearchTree.prototype.getNodeHeight = function (node) {
        if (node === null) {
            return 0;
        }
        return (1 +
            Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)));
    };
    return BinarySearchTree;
}());
