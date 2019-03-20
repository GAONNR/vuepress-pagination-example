<template>
    <div>
        <div v-for="post in this.$site.pages" :key="post.id" :to="post.path"> 
            {{ post.title }}
        </div>
        
       <Content/>
    </div>
</template>
