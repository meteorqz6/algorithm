#pragma warning(disable:4996)
#include <stdio.h>
#include <stdlib.h>

struct Node {
    struct Node* next;
    struct Node* before;
    int data;
};

struct Node* head = NULL;
struct Node* tail = NULL;
struct Node* makeNode(int data);
void addNode(int data);
void Remove(struct Node* head, int N, int k);

int main() {

    int N; //7
    int K; //3
    int cnt = 0;
    scanf("%d %d", &N, &K);

    for (int i = 1; i <= N; i++)
        addNode(i);

    head->before = tail;
    tail->next = head;

    Remove(head, N, K);

    return 0;

}

struct Node* makeNode(int data) {

    struct Node* new = malloc(sizeof(struct Node));
    new->next = NULL;
    new->before = NULL;
    new->data = data;
    return new;

}

void addNode(int data) {

    struct Node* tmp = head;
    struct Node* newNode = makeNode(data);

    if (head == NULL) {
        head = newNode;
        tail = head;
    }

    else {
        tmp = tail;
        tmp->next = newNode;
        newNode->before = tmp;
        tail = newNode;
    }

}

void Remove(struct Node* head, int N, int K) {

    struct Node* tmp = head->before;
    int i = 0, j = 0;
    printf("<");

    while (i < N) {
        j = K;

        while (j--)
            tmp = tmp->next;

        printf(i++ ? ", %d" : "%d", tmp->data);

        tmp->next->before = tmp->before;
        tmp->before->next = tmp->next;
    }
    printf(">");
}