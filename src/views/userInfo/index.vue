<template>
    <div>
        <a-card title="uaserinf" style="">
            <a slot="extra" href="#">more</a>
            <div style="display:flex">

              <a-timeline>
                <a-timeline-item color="green">
                Create a services site 2015-09-01
                </a-timeline-item>
                <a-timeline-item color="green">
                Create a services site 2015-09-01
                </a-timeline-item>
                <a-timeline-item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
                </a-timeline-item>
                <a-timeline-item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
                </a-timeline-item>
                <a-timeline-item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
                </a-timeline-item>
                <a-timeline-item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
                </a-timeline-item>
            </a-timeline>
             <a-timeline mode="alternate">
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item color="green">
                Solve initial network problems 2015-09-01
                </a-timeline-item>
                <a-timeline-item>
                <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
                </a-timeline-item>
                <a-timeline-item color="red">
                Network problems being solved 2015-09-01
                </a-timeline-item>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>
                <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                Technical testing 2015-09-01
                </a-timeline-item>
            </a-timeline>
            </div>

        </a-card>
    </div>
</template>
<script>
export default {
    name:'userinfo'
}
</script>
