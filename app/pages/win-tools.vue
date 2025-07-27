<template>
    <UCard class="min-w-128 mb-5 mt-5">
        <template #header>
            KMS
        </template>
        <Shiki lang="js" code="irm https://get.activated.win | iex"/>
    </UCard>
    <UCard class="min-w-128 mb-5">
        <template #header>
            Chris Titus Tech’s Windows Utility
        </template>
        <Shiki lang="js" code="irm 'https://christitus.com/win' | iex"/>
    </UCard>
    <UCard class="min-w-128">
        <template #header>
            autounattend.xml
        </template>
        <p>How to use: <ULink to="https://schneegans.de/windows/unattend-generator/usage/">manual</ULink></p>
        <p><ULink to="https://schneegans.de/windows/unattend-generator/">autounattend.xml generator</ULink></p>
    </UCard>
</template>