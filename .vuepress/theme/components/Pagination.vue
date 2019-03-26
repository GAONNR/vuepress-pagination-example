<template>
    <div>
        <!-- $pagination variable contains information but mostly just a range of posts for the current pagination -->
        <div v-for="post in $pagination.posts" :key="post.id" :to="post.path"> 
            <a :href="post.path">{{ post.title }}</a>
        </div>
        
        <!-- Conditionally render the link using hasPrev -->
        <a v-if="$pagination.hasPrev" :href="$pagination.prevLink">Prev</a>
        <!-- Otherwise render without a clickable link when not available -->
        <a :href="$pagination.nextLink">Next</a>
    </div>
</template>
