<template>
    <div>
        <div v-for="post in $pagination.posts" :key="post.id" :to="post.path"> 
            <a :href="post.path">{{ post.title }}</a>
        </div>
        
        <a :href="$pagination.prevLink">Prev</a>
        <a :href="$pagination.nextLink">Next</a>
    </div>
</template>
