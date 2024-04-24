class TreeNode<T> {
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(public value: T) {}
}

class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;

    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value: T): TreeNode<T> | null {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return node;
        }
    }

    delete(value: T): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            node.value = this.findMinValue(node.right);
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    }

    private findMinValue(node: TreeNode<T>): T {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    update(oldValue: T, newValue: T): void {
        this.delete(oldValue);
        this.insert(newValue);
    }

    getHeight(): number {
        return this.getNodeHeight(this.root);
    }

    private getNodeHeight(node: TreeNode<T> | null): number {
        if (node === null) {
            return 0;
        }
        return (
            1 +
            Math.max(
                this.getNodeHeight(node.left),
                this.getNodeHeight(node.right)
            )
        );
    }
}
