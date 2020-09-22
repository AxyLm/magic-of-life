export default {dates:{
        "load": {
            "cpucore": 4,
            "min1": 0.06,
            "min5": 0.1,
            "min15": 0.09
        },
        "help": null,
        "ip": {},
        "connections": {
            "nf_conntrack_percent": 0.22430419921875,
            "ESTABLISHED": 85,
            "initiated": 0,
            "terminated": 0,
            "nf_conntrack_count": 147.0,
            "SYN_RECV": 0,
            "nf_conntrack_max": 65536.0,
            "SYN_SENT": 0,
            "LISTEN": 28
        },
        "memswap": {
            "used": 0,
            "percent": 0.0,
            "free": 4294963200,
            "sout": 0,
            "total": 4294963200,
            "sin": 0
        },
        "processlist": [
            {
                "status": "R",
                "username": "root",
                "udp": 0,
                "cpu_times": [
                    165.42,
                    76.84,
                    2.58,
                    10.06,
                    0.0
                ],
                "num_ctx_switches": [
                    9979,
                    21532
                ],
                "pid": 24428,
                "tcp": 2,
                "io_counters": [
                    65536,
                    8192,
                    65536,
                    8192,
                    1
                ],
                "cmdline": [
                    "/usr/bin/python",
                    "/usr/local/bin/glances",
                    "-w"
                ],
                "memory_info": [
                    29425664,
                    46899200,
                    8146944,
                    2617344,
                    0,
                    29810688,
                    0
                ],
                "ionice": [
                    0,
                    0
                ],
                "num_fds": 9,
                "memory_swap": 0,
                "num_threads": 1,
                "name": "glances",
                "cpu_percent": 10.8,
                "cpu_affinity": [
                    0,
                    1,
                    2,
                    3
                ],
                "gids": [
                    0,
                    0,
                    0
                ],
                "extended_stats": true,
                "memory_percent": 0.728051044647852,
                "ppid": 24427,
                "time_since_update": 3.416590929031372,
                "nice": 0
            },
            {
                "status": "S",
                "username": "mongodb",
                "cpu_times": [
                    465.37,
                    3186.75,
                    0.0,
                    0.0,
                    3.39
                ],
                "name": "mongod",
                "num_threads": 11,
                "cpu_percent": 0.6,
                "pid": 388,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    30511104,
                    40960,
                    30511104,
                    40960,
                    1
                ],
                "cmdline": [
                    "/usr/bin/mongod",
                    "--config",
                    "/etc/mongodb.conf"
                ],
                "memory_percent": 0.9762410513770543,
                "memory_info": [
                    39456768,
                    243744768,
                    11132928,
                    8642560,
                    0,
                    184446976,
                    0
                ],
                "ppid": 1,
                "gids": [
                    65534,
                    65534,
                    65534
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    4.52,
                    3.79,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "frpc",
                "num_threads": 8,
                "cpu_percent": 0.6,
                "pid": 24542,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "./frpc",
                    "-c",
                    "frpc.ini"
                ],
                "memory_percent": 0.2980509635731253,
                "memory_info": [
                    12046336,
                    823644160,
                    7184384,
                    4018176,
                    0,
                    11894784,
                    0
                ],
                "ppid": 24541,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.17,
                    172.91,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "rcu_sched",
                "num_threads": 1,
                "cpu_percent": 0.3,
                "pid": 10,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    816.49,
                    346.03,
                    120.68,
                    280.35,
                    166.72
                ],
                "name": "python",
                "num_threads": 2,
                "cpu_percent": 0.0,
                "pid": 945,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    2220032,
                    1390125056,
                    2220032,
                    1390116864,
                    1
                ],
                "cmdline": [
                    "python",
                    "task.pyc"
                ],
                "memory_percent": 1.495524675093033,
                "memory_info": [
                    60444672,
                    87171072,
                    7434240,
                    2617344,
                    0,
                    70266880,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    424.22,
                    77.7,
                    0.71,
                    1.73,
                    2.29
                ],
                "name": "python",
                "num_threads": 11,
                "cpu_percent": 0.0,
                "pid": 778,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    18849792,
                    146853888,
                    18849792,
                    146853888,
                    1
                ],
                "cmdline": [
                    "python",
                    "main.pyc",
                    "9203"
                ],
                "memory_percent": 1.4509335754765167,
                "memory_info": [
                    58642432,
                    162385920,
                    12840960,
                    2617344,
                    0,
                    131641344,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    50.73,
                    19.09,
                    485.6,
                    254.15,
                    0.34
                ],
                "name": "node",
                "num_threads": 11,
                "cpu_percent": 0.0,
                "pid": 1393,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    32043008,
                    1560576,
                    32043008,
                    1560576,
                    1
                ],
                "cmdline": [
                    "PM2 v4.4.0: God Daemon (/root/.pm2)",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 1.3841482694599612,
                "memory_info": [
                    55943168,
                    151019520,
                    28839936,
                    32206848,
                    0,
                    102842368,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    1669.63,
                    83.12,
                    0.28,
                    0.24,
                    1.12
                ],
                "name": "lxpanel",
                "num_threads": 4,
                "cpu_percent": 0.0,
                "pid": 1329,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    8151040,
                    48594944,
                    8151040,
                    48594944,
                    1
                ],
                "cmdline": [
                    "lxpanel",
                    "--profile",
                    "LXDE-pi"
                ],
                "memory_percent": 1.2357815198268243,
                "memory_info": [
                    49946624,
                    189591552,
                    25608192,
                    118784,
                    0,
                    83685376,
                    0
                ],
                "ppid": 1250,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "mysql",
                "cpu_times": [
                    329.45,
                    443.3,
                    0.0,
                    0.0,
                    1.79
                ],
                "name": "mysqld",
                "num_threads": 16,
                "cpu_percent": 0.0,
                "pid": 1164,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    11579392,
                    49152,
                    11579392,
                    49152,
                    1
                ],
                "cmdline": [
                    "/usr/local/mysql/bin/mysqld",
                    "--basedir=/usr/local/mysql",
                    "--datadir=/usr/local/mysql/var",
                    "--plugin-dir=/usr/local/mysql/lib/plugin",
                    "--user=mysql",
                    "--log-error=raspberrypi.err",
                    "--open-files-limit=65535",
                    "--pid-file=/usr/local/mysql/var/raspberrypi.pid",
                    "--socket=/tmp/mysql.sock",
                    "--port=3306"
                ],
                "memory_percent": 1.235680176418605,
                "memory_info": [
                    49942528,
                    533716992,
                    7622656,
                    7991296,
                    0,
                    519491584,
                    0
                ],
                "ppid": 567,
                "gids": [
                    1002,
                    1002,
                    1002
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    1125.68,
                    160.73,
                    5.62,
                    0.87,
                    0.0
                ],
                "name": "beam.smp",
                "num_threads": 9,
                "cpu_percent": 0.0,
                "pid": 2053,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    21118976,
                    552960,
                    21118976,
                    552960,
                    1
                ],
                "cmdline": [
                    "/home/emqx/erts-10.7/bin/beam.smp",
                    "-P",
                    "16384",
                    "-Q",
                    "4096",
                    "-e",
                    "256000",
                    "-t",
                    "262144",
                    "-zdbbl",
                    "1024",
                    "-spp",
                    "false",
                    "-A",
                    "1",
                    "-IOp",
                    "1",
                    "-IOt",
                    "1",
                    "-S",
                    "1:1",
                    "-SDcpu",
                    "1:1",
                    "-SDio",
                    "1",
                    "-L",
                    "--",
                    "-root",
                    "/home/emqx",
                    "-progname",
                    "home/emqx/bin/emqx",
                    "--",
                    "-home",
                    "/root",
                    "--",
                    "-boot",
                    "/home/emqx/releases/v4.1.3/emqx",
                    "-mode",
                    "embedded",
                    "-boot_var",
                    "ERTS_LIB_DIR",
                    "/home/emqx/erts-10.7/../lib",
                    "-mnesia",
                    "dir",
                    "\"/home/emqx/data/mnesia/emqx@127.0.0.1\"",
                    "-config",
                    "/home/emqx/data/configs/app.2020.08.23.14.23.06.config",
                    "-heart",
                    "-shutdown_time",
                    "10000",
                    "-setcookie",
                    "emqxsecretcookie",
                    "-name",
                    "emqx@127.0.0.1",
                    "--",
                    "-vm_args",
                    "/home/emqx/data/configs/vm.2020.08.23.14.23.06.args",
                    "-start_epmd",
                    "false",
                    "-epmd_module",
                    "ekka_epmd",
                    "-proto_dist",
                    "ekka",
                    "--",
                    "console",
                    "--"
                ],
                "memory_percent": 1.1902783295363337,
                "memory_info": [
                    48107520,
                    93388800,
                    7262208,
                    2965504,
                    0,
                    72015872,
                    0
                ],
                "ppid": 2022,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    92.36,
                    224.7,
                    0.0,
                    0.0,
                    0.01
                ],
                "name": "systemd-journald",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 104,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    135168,
                    0,
                    135168,
                    0,
                    1
                ],
                "cmdline": [
                    "/lib/systemd/systemd-journald"
                ],
                "memory_percent": 1.0339054506538676,
                "memory_info": [
                    41787392,
                    80637952,
                    40808448,
                    122880,
                    0,
                    17661952,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.73,
                    0.4,
                    0.01,
                    0.0,
                    0.55
                ],
                "name": "pcmanfm",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1333,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    6324224,
                    0,
                    6324224,
                    0,
                    1
                ],
                "cmdline": [
                    "pcmanfm",
                    "--desktop",
                    "--profile",
                    "LXDE-pi"
                ],
                "memory_percent": 0.6977493655902645,
                "memory_info": [
                    28200960,
                    126881792,
                    24133632,
                    192512,
                    0,
                    37797888,
                    0
                ],
                "ppid": 1250,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    65.32,
                    116.93,
                    9.89,
                    16.7,
                    0.39
                ],
                "name": "Xvnc-core",
                "num_threads": 2,
                "cpu_percent": 0.0,
                "pid": 1191,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1945600,
                    110592,
                    1945600,
                    110592,
                    1
                ],
                "cmdline": [
                    "/usr/bin/Xvnc-core",
                    ":1",
                    "-auth",
                    "/home/pi/.Xauthority",
                    "-pn",
                    "-depth",
                    "16",
                    "-geometry",
                    "1920x1080"
                ],
                "memory_percent": 0.6795075521107805,
                "memory_info": [
                    27463680,
                    84705280,
                    16629760,
                    9367552,
                    0,
                    19877888,
                    0
                ],
                "ppid": 1189,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    15.16,
                    29.54,
                    0.0,
                    0.0,
                    4.19
                ],
                "name": "php-fpm7.3",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 530,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    14639104,
                    8192,
                    14639104,
                    8192,
                    1
                ],
                "cmdline": [
                    "php-fpm: master process (/etc/php/7.3/fpm/php-fpm.conf)",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.5508014236721986,
                "memory_info": [
                    22261760,
                    218497024,
                    19038208,
                    3072000,
                    0,
                    4980736,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.08,
                    0.13,
                    0.0,
                    0.0,
                    0.68
                ],
                "name": "openbox",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1323,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    6463488,
                    4096,
                    6463488,
                    4096,
                    1
                ],
                "cmdline": [
                    "openbox",
                    "--config-file",
                    "/home/pi/.config/openbox/lxde-pi-rc.xml"
                ],
                "memory_percent": 0.454322499047372,
                "memory_info": [
                    18362368,
                    82337792,
                    15527936,
                    327680,
                    0,
                    2641920,
                    0
                ],
                "ppid": 1250,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.72,
                    0.18,
                    0.0,
                    0.0,
                    0.83
                ],
                "name": "vncserverui",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1266,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    5238784,
                    0,
                    5238784,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/vncserverui",
                    "-statusicon",
                    "5"
                ],
                "memory_percent": 0.37942972037326805,
                "memory_info": [
                    15335424,
                    33460224,
                    13848576,
                    3514368,
                    0,
                    1724416,
                    0
                ],
                "ppid": 1245,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    353.02,
                    214.59,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "frpc",
                "num_threads": 10,
                "cpu_percent": 0.0,
                "pid": 4971,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    966656,
                    0,
                    966656,
                    0,
                    1
                ],
                "cmdline": [
                    "./frpc",
                    "-c",
                    "frpc.ini"
                ],
                "memory_percent": 0.3673698547951647,
                "memory_info": [
                    14848000,
                    823644160,
                    8257536,
                    4018176,
                    0,
                    11894784,
                    0
                ],
                "ppid": 4970,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    8.09,
                    8.97,
                    0.15,
                    0.09,
                    0.07
                ],
                "name": "lxsession",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1250,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    11333632,
                    28672,
                    11333632,
                    28672,
                    1
                ],
                "cmdline": [
                    "/usr/bin/lxsession",
                    "-s",
                    "LXDE-pi",
                    "-e",
                    "LXDE"
                ],
                "memory_percent": 0.330987571244416,
                "memory_info": [
                    13377536,
                    58560512,
                    12124160,
                    176128,
                    0,
                    26648576,
                    0
                ],
                "ppid": 1227,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    145.85,
                    28.49,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 22,
                "cpu_percent": 0.0,
                "pid": 5482,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    14737408,
                    0,
                    14737408,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.32510965356769334,
                "memory_info": [
                    13139968,
                    210677760,
                    7065600,
                    2617344,
                    0,
                    191229952,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    2.67,
                    0.68,
                    0.0,
                    0.0,
                    0.93
                ],
                "name": "vncserverui",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1245,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    4935680,
                    0,
                    4935680,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/vncserverui",
                    "virtual",
                    "14"
                ],
                "memory_percent": 0.325008310159474,
                "memory_info": [
                    13135872,
                    33345536,
                    10948608,
                    3514368,
                    0,
                    2523136,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    71.24,
                    16.56,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 23,
                "cpu_percent": 0.0,
                "pid": 12132,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    4292608,
                    0,
                    4292608,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.3050436587402609,
                "memory_info": [
                    12328960,
                    218402816,
                    7057408,
                    2617344,
                    0,
                    198926336,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    43.41,
                    10.29,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 20,
                "cpu_percent": 0.0,
                "pid": 19011,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    159744,
                    3108864,
                    159744,
                    3108864,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.29460528769366723,
                "memory_info": [
                    11907072,
                    201437184,
                    7065600,
                    2617344,
                    0,
                    181837824,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.06,
                    0.03,
                    0.0,
                    0.0,
                    0.05
                ],
                "name": "lxpolkit",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1326,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    237568,
                    0,
                    237568,
                    0,
                    1
                ],
                "cmdline": [
                    "lxpolkit"
                ],
                "memory_percent": 0.28295079574844134,
                "memory_info": [
                    11436032,
                    49311744,
                    10395648,
                    12288,
                    0,
                    18006016,
                    0
                ],
                "ppid": 1250,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    72.01,
                    309.07,
                    176.27,
                    283.44,
                    55.08
                ],
                "name": "vncserver-x11-core",
                "num_threads": 2,
                "cpu_percent": 0.0,
                "pid": 569,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    6483968,
                    128217088,
                    6483968,
                    128217088,
                    1
                ],
                "cmdline": [
                    "/usr/bin/vncserver-x11-core",
                    "-service"
                ],
                "memory_percent": 0.27474197968267355,
                "memory_info": [
                    11104256,
                    36548608,
                    9416704,
                    5070848,
                    0,
                    10358784,
                    0
                ],
                "ppid": 531,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.09,
                    0.03,
                    0.0,
                    0.0,
                    0.02
                ],
                "name": "gvfs-udisks2-volume-monitor",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1428,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    401408,
                    0,
                    401408,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfs-udisks2-volume-monitor"
                ],
                "memory_percent": 0.2731204851511638,
                "memory_info": [
                    11038720,
                    82284544,
                    9768960,
                    126976,
                    0,
                    26660864,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.46,
                    0.63,
                    0.01,
                    0.01,
                    0.95
                ],
                "name": "udisksd",
                "num_threads": 5,
                "cpu_percent": 0.0,
                "pid": 389,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    4603904,
                    0,
                    4603904,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/udisks2/udisksd"
                ],
                "memory_percent": 0.27149899061965416,
                "memory_info": [
                    10973184,
                    66781184,
                    9146368,
                    368640,
                    0,
                    44281856,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    73.6,
                    14.21,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 4,
                "cpu_percent": 0.0,
                "pid": 12593,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    8998912,
                    0,
                    8998912,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.2707895867621186,
                "memory_info": [
                    10944512,
                    55660544,
                    7065600,
                    2617344,
                    0,
                    38293504,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    28.63,
                    5.57,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 4,
                "cpu_percent": 0.0,
                "pid": 1300,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    2457600,
                    0,
                    2457600,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.26845868837307346,
                "memory_info": [
                    10850304,
                    64843776,
                    7061504,
                    2617344,
                    0,
                    46489600,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    58.87,
                    12.1,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 5,
                "cpu_percent": 0.0,
                "pid": 2794,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    4820992,
                    0,
                    4820992,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.267749284515538,
                "memory_info": [
                    10821632,
                    55394304,
                    7061504,
                    2617344,
                    0,
                    38014976,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    7.69,
                    2.01,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 4,
                "cpu_percent": 0.0,
                "pid": 13963,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    348160,
                    0,
                    348160,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.26460763886073796,
                "memory_info": [
                    10694656,
                    64835584,
                    7061504,
                    2617344,
                    0,
                    46497792,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    22.84,
                    4.54,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "python",
                "num_threads": 2,
                "cpu_percent": 0.0,
                "pid": 6863,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    1593344,
                    0,
                    1593344,
                    1
                ],
                "cmdline": [
                    "python",
                    "/home/ngrok/sunny.py"
                ],
                "memory_percent": 0.26258077069635083,
                "memory_info": [
                    10612736,
                    36515840,
                    7127040,
                    2617344,
                    0,
                    20807680,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    1.08,
                    0.78,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mmonit",
                "num_threads": 7,
                "cpu_percent": 0.0,
                "pid": 22559,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    606208,
                    0,
                    606208,
                    1
                ],
                "cmdline": [
                    "./mmonit",
                    "start"
                ],
                "memory_percent": 0.2282253553099892,
                "memory_info": [
                    9224192,
                    210845696,
                    5947392,
                    266240,
                    0,
                    197566464,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.08,
                    0.04,
                    0.0,
                    0.0,
                    0.01
                ],
                "name": "gvfsd-trash",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1510,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    40960,
                    0,
                    40960,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfsd-trash",
                    "--spawner",
                    ":1.3",
                    "/org/gtk/gvfs/exec_spaw/0"
                ],
                "memory_percent": 0.21251712703598907,
                "memory_info": [
                    8589312,
                    57319424,
                    7778304,
                    36864,
                    0,
                    34750464,
                    0
                ],
                "ppid": 1305,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    78.89,
                    52.62,
                    671.44,
                    1181.07,
                    0.87
                ],
                "name": "systemd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    235403264,
                    162103296,
                    235403264,
                    162103296,
                    1
                ],
                "cmdline": [
                    "/sbin/init",
                    "splash"
                ],
                "memory_percent": 0.20511905823597612,
                "memory_info": [
                    8290304,
                    34648064,
                    6561792,
                    1110016,
                    0,
                    18571264,
                    0
                ],
                "ppid": 0,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.13,
                    0.07,
                    0.0,
                    0.0,
                    1.28
                ],
                "name": "polkitd",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 560,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1998848,
                    0,
                    1998848,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/policykit-1/polkitd",
                    "--no-debug"
                ],
                "memory_percent": 0.18576246726607915,
                "memory_info": [
                    7507968,
                    41435136,
                    6791168,
                    8192,
                    0,
                    26263552,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.11,
                    0.06,
                    0.02,
                    0.04,
                    0.39
                ],
                "name": "systemd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 551,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1298432,
                    0,
                    1298432,
                    0,
                    1
                ],
                "cmdline": [
                    "/lib/systemd/systemd",
                    "--user"
                ],
                "memory_percent": 0.1856611238578598,
                "memory_info": [
                    7503872,
                    14946304,
                    6565888,
                    1110016,
                    0,
                    704512,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.02,
                    0.0,
                    0.0,
                    0.0,
                    0.01
                ],
                "name": "gvfs-afc-volume-monitor",
                "num_threads": 4,
                "cpu_percent": 0.0,
                "pid": 1435,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    282624,
                    0,
                    282624,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfs-afc-volume-monitor"
                ],
                "memory_percent": 0.1849517200003243,
                "memory_info": [
                    7475200,
                    58114048,
                    6750208,
                    61440,
                    0,
                    34746368,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "Xvnc",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1192,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/Xvnc",
                    "-rootHelper",
                    "1000",
                    "4"
                ],
                "memory_percent": 0.16610184607152412,
                "memory_info": [
                    6713344,
                    19263488,
                    5943296,
                    1429504,
                    0,
                    1064960,
                    0
                ],
                "ppid": 1191,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.01,
                    0.03,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "gvfsd-fuse",
                "num_threads": 6,
                "cpu_percent": 0.0,
                "pid": 1316,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    249856,
                    0,
                    249856,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfsd-fuse",
                    "/run/user/1000/gvfs",
                    "-f",
                    "-o",
                    "big_writes"
                ],
                "memory_percent": 0.1647843817646725,
                "memory_info": [
                    6660096,
                    58134528,
                    6070272,
                    32768,
                    0,
                    43425792,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.04,
                    0.01,
                    0.0,
                    0.0,
                    0.2
                ],
                "name": "gvfsd",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1305,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1110016,
                    0,
                    1110016,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfsd"
                ],
                "memory_percent": 0.16306154382494345,
                "memory_info": [
                    6590464,
                    45195264,
                    5918720,
                    24576,
                    0,
                    26202112,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.01,
                    0.01,
                    0.1,
                    0.04,
                    0.01
                ],
                "name": "menu-cached",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1422,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1462272,
                    24576,
                    1462272,
                    24576,
                    1
                ],
                "cmdline": [
                    "/usr/lib/menu-cache/menu-cached",
                    "/run/user/1000/menu-cached-:1"
                ],
                "memory_percent": 0.16235213996740797,
                "memory_info": [
                    6561792,
                    29392896,
                    6008832,
                    16384,
                    0,
                    17637376,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.09,
                    0.04,
                    0.05,
                    0.0,
                    0.0
                ],
                "name": "sshd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 23385,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    8192,
                    0,
                    8192,
                    1
                ],
                "cmdline": [
                    "sshd: pi [priv]",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.1576903431893176,
                "memory_info": [
                    6373376,
                    12529664,
                    5570560,
                    655360,
                    0,
                    987136,
                    0
                ],
                "ppid": 681,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    11.72,
                    20.21,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "systemd-logind",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 381,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    208896,
                    0,
                    208896,
                    0,
                    1
                ],
                "cmdline": [
                    "/lib/systemd/systemd-logind"
                ],
                "memory_percent": 0.14309689240573037,
                "memory_info": [
                    5783552,
                    13488128,
                    5140480,
                    192512,
                    0,
                    684032,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.02,
                    0.07,
                    3.04,
                    2.49,
                    0.0
                ],
                "name": "sshd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 681,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    24576,
                    139264,
                    24576,
                    139264,
                    1
                ],
                "cmdline": [
                    "/usr/sbin/sshd",
                    "-D"
                ],
                "memory_percent": 0.14269151877285294,
                "memory_info": [
                    5767168,
                    10981376,
                    5177344,
                    655360,
                    0,
                    745472,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.01,
                    0.01,
                    0.0,
                    0.0,
                    0.01
                ],
                "name": "gvfs-gphoto2-volume-monitor",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1455,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    282624,
                    0,
                    282624,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfs-gphoto2-volume-monitor"
                ],
                "memory_percent": 0.12738866413173022,
                "memory_info": [
                    5148672,
                    43413504,
                    4648960,
                    65536,
                    0,
                    26550272,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "www-data",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "php-fpm7.3",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1253,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "php-fpm: pool www",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.11806507057554949,
                "memory_info": [
                    4771840,
                    218497024,
                    1544192,
                    3072000,
                    0,
                    4980736,
                    0
                ],
                "ppid": 530,
                "gids": [
                    33,
                    33,
                    33
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "www-data",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "php-fpm7.3",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1254,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "php-fpm: pool www",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.11806507057554949,
                "memory_info": [
                    4771840,
                    218497024,
                    1544192,
                    3072000,
                    0,
                    4980736,
                    0
                ],
                "ppid": 530,
                "gids": [
                    33,
                    33,
                    33
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.0,
                    0.02,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "gvfs-mtp-volume-monitor",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1441,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    73728,
                    0,
                    73728,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfs-mtp-volume-monitor"
                ],
                "memory_percent": 0.11613954581938173,
                "memory_info": [
                    4694016,
                    41807872,
                    4284416,
                    65536,
                    0,
                    26136576,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.01,
                    0.03,
                    0.0,
                    0.0,
                    0.13
                ],
                "name": "bluetoothd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1322,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1265664,
                    0,
                    1265664,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/bluetooth/bluetoothd"
                ],
                "memory_percent": 0.11016028473443973,
                "memory_info": [
                    4452352,
                    10043392,
                    4100096,
                    851968,
                    0,
                    450560,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    73.46,
                    71.91,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "wpa_supplicant",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 643,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "wpa_supplicant",
                    "-B",
                    "-c/etc/wpa_supplicant/wpa_supplicant.conf",
                    "-iwlan0",
                    "-Dnl80211,wext"
                ],
                "memory_percent": 0.1086401336111494,
                "memory_info": [
                    4390912,
                    11382784,
                    3731456,
                    2236416,
                    0,
                    724992,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.01,
                    0.0,
                    0.0,
                    0.0,
                    0.02
                ],
                "name": "gvfs-goa-volume-monitor",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1450,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    315392,
                    0,
                    315392,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/lib/gvfs/gvfs-goa-volume-monitor"
                ],
                "memory_percent": 0.10843744679471068,
                "memory_info": [
                    4382720,
                    41807872,
                    4063232,
                    69632,
                    0,
                    26124288,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.01,
                    0.01,
                    0.0,
                    0.0,
                    0.04
                ],
                "name": "bluealsa",
                "num_threads": 3,
                "cpu_percent": 0.0,
                "pid": 1355,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    266240,
                    0,
                    266240,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/bluealsa"
                ],
                "memory_percent": 0.10691729567142035,
                "memory_info": [
                    4321280,
                    27348992,
                    3981312,
                    61440,
                    0,
                    17481728,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    1.05,
                    2.18,
                    0.0,
                    0.0,
                    0.52
                ],
                "name": "wpa_supplicant",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 410,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    2367488,
                    0,
                    2367488,
                    0,
                    1
                ],
                "cmdline": [
                    "/sbin/wpa_supplicant",
                    "-u",
                    "-s",
                    "-O",
                    "/run/wpa_supplicant"
                ],
                "memory_percent": 0.10205281207689128,
                "memory_info": [
                    4124672,
                    10997760,
                    3743744,
                    2236416,
                    0,
                    446464,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    1.23,
                    0.74,
                    1.43,
                    1.93,
                    0.06
                ],
                "name": "systemd-udevd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 171,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    13475840,
                    0,
                    13475840,
                    0,
                    1
                ],
                "cmdline": [
                    "/lib/systemd/systemd-udevd"
                ],
                "memory_percent": 0.0978977323398977,
                "memory_info": [
                    3956736,
                    18927616,
                    3084288,
                    503808,
                    0,
                    1093632,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "messagebus",
                "cpu_times": [
                    48.13,
                    8.31,
                    0.0,
                    0.0,
                    0.75
                ],
                "name": "dbus-daemon",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 400,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1290240,
                    0,
                    1290240,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/dbus-daemon",
                    "--system",
                    "--address=systemd:",
                    "--nofork",
                    "--nopidfile",
                    "--systemd-activation",
                    "--syslog-only"
                ],
                "memory_percent": 0.09364130919468473,
                "memory_info": [
                    3784704,
                    6934528,
                    3133440,
                    176128,
                    0,
                    847872,
                    0
                ],
                "ppid": 1,
                "gids": [
                    110,
                    110,
                    110
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.07,
                    0.03,
                    0.03,
                    0.0,
                    0.0
                ],
                "name": "bash",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 23398,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    4096,
                    0,
                    4096,
                    1
                ],
                "cmdline": [
                    "-bash"
                ],
                "memory_percent": 0.09272921852071055,
                "memory_info": [
                    3747840,
                    9240576,
                    2809856,
                    905216,
                    0,
                    1101824,
                    0
                ],
                "ppid": 23395,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.11,
                    0.0,
                    0.01,
                    0.02,
                    0.02
                ],
                "name": "bash",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1391,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    184320,
                    0,
                    184320,
                    0,
                    1
                ],
                "cmdline": [
                    "-bash"
                ],
                "memory_percent": 0.09171578443851698,
                "memory_info": [
                    3706880,
                    9244672,
                    2797568,
                    905216,
                    0,
                    1105920,
                    0
                ],
                "ppid": 1124,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.03,
                    0.16,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "sshd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 23395,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "sshd: pi@pts/2",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.08887816900837502,
                "memory_info": [
                    3592192,
                    12529664,
                    2789376,
                    655360,
                    0,
                    987136,
                    0
                ],
                "ppid": 23385,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.05,
                    0.04,
                    0.01,
                    0.0,
                    0.11
                ],
                "name": "dbus-daemon",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1226,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    86016,
                    8192,
                    86016,
                    8192,
                    1
                ],
                "cmdline": [
                    "/usr/bin/dbus-daemon",
                    "--session",
                    "--nofork",
                    "--address=unix:path=/run/user/1000/session-8623a9c6849644eb/bus",
                    "--nopidfile",
                    "--nosyslog"
                ],
                "memory_percent": 0.08654727061932983,
                "memory_info": [
                    3497984,
                    6705152,
                    3088384,
                    176128,
                    0,
                    618496,
                    0
                ],
                "ppid": 1189,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.01,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "sudo",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 23416,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "sudo",
                    "su",
                    "root"
                ],
                "memory_percent": 0.08289890792343303,
                "memory_info": [
                    3350528,
                    10809344,
                    3026944,
                    139264,
                    0,
                    704512,
                    0
                ],
                "ppid": 23398,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "vncserver",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1189,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    4096,
                    8192,
                    4096,
                    8192,
                    1
                ],
                "cmdline": [
                    "/usr/bin/vncserver",
                    "-depth",
                    "16",
                    "-geometry",
                    "1920x1080",
                    ":1"
                ],
                "memory_percent": 0.08036532271794913,
                "memory_info": [
                    3248128,
                    11010048,
                    2777088,
                    1040384,
                    0,
                    827392,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.02,
                    0.03,
                    44.55,
                    18.37,
                    0.0
                ],
                "name": "bash",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 23426,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    249856,
                    2527232,
                    249856,
                    2527232,
                    1
                ],
                "cmdline": [
                    "bash"
                ],
                "memory_percent": 0.079757262268633,
                "memory_info": [
                    3223552,
                    8679424,
                    2859008,
                    905216,
                    0,
                    540672,
                    0
                ],
                "ppid": 23421,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    17.84,
                    26.13,
                    0.0,
                    0.0,
                    0.39
                ],
                "name": "rsyslogd",
                "num_threads": 4,
                "cpu_percent": 0.0,
                "pid": 418,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    774144,
                    233226240,
                    774144,
                    233226240,
                    1
                ],
                "cmdline": [
                    "/usr/sbin/rsyslogd",
                    "-n",
                    "-iNONE"
                ],
                "memory_percent": 0.07955457545219428,
                "memory_info": [
                    3215360,
                    26124288,
                    2531328,
                    569344,
                    0,
                    18128896,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "systemd-timesync",
                "cpu_times": [
                    1.03,
                    1.83,
                    0.0,
                    0.0,
                    0.01
                ],
                "name": "systemd-timesyncd",
                "num_threads": 2,
                "cpu_percent": 0.0,
                "pid": 348,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1992704,
                    0,
                    1992704,
                    0,
                    1
                ],
                "cmdline": [
                    "/lib/systemd/systemd-timesyncd"
                ],
                "memory_percent": 0.07225785006040067,
                "memory_info": [
                    2920448,
                    22949888,
                    2322432,
                    40960,
                    0,
                    9093120,
                    0
                ],
                "ppid": 1,
                "gids": [
                    102,
                    102,
                    102
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.03,
                    0.08,
                    1.05,
                    0.47,
                    0.04
                ],
                "name": "mysqld_safe",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 567,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    192512,
                    0,
                    192512,
                    0,
                    1
                ],
                "cmdline": [
                    "/bin/sh",
                    "/usr/local/mysql/bin/mysqld_safe",
                    "--datadir=/usr/local/mysql/var",
                    "--pid-file=/usr/local/mysql/var/raspberrypi.pid"
                ],
                "memory_percent": 0.07124441597820712,
                "memory_info": [
                    2879488,
                    8679424,
                    2596864,
                    905216,
                    0,
                    540672,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.02,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "su",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 23421,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "su",
                    "root"
                ],
                "memory_percent": 0.06921754781382,
                "memory_info": [
                    2797568,
                    10403840,
                    2498560,
                    45056,
                    0,
                    700416,
                    0
                ],
                "ppid": 23416,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "avahi",
                "cpu_times": [
                    3.41,
                    9.6,
                    0.0,
                    0.0,
                    0.25
                ],
                "name": "avahi-daemon",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 412,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    405504,
                    0,
                    405504,
                    0,
                    1
                ],
                "cmdline": [
                    "avahi-daemon:",
                    "running",
                    "[raspberrypi.local]"
                ],
                "memory_percent": 0.06648127579189739,
                "memory_info": [
                    2686976,
                    5910528,
                    2428928,
                    106496,
                    0,
                    434176,
                    0
                ],
                "ppid": 1,
                "gids": [
                    113,
                    113,
                    113
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.01,
                    0.0,
                    0.03,
                    0.05,
                    0.0
                ],
                "name": "xstartup",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1227,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1150976,
                    8192,
                    1150976,
                    8192,
                    1
                ],
                "cmdline": [
                    "/bin/sh",
                    "/etc/vnc/xstartup"
                ],
                "memory_percent": 0.06465709444394899,
                "memory_info": [
                    2613248,
                    8409088,
                    2457600,
                    905216,
                    0,
                    376832,
                    0
                ],
                "ppid": 1189,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.16,
                    0.43,
                    0.78,
                    2.92,
                    0.0
                ],
                "name": "sh",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 2468,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "sh",
                    "-s",
                    "disksup"
                ],
                "memory_percent": 0.06333963013709736,
                "memory_info": [
                    2560000,
                    8409088,
                    2387968,
                    905216,
                    0,
                    376832,
                    0
                ],
                "ppid": 2421,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.03,
                    0.0,
                    0.0,
                    0.01,
                    0.05
                ],
                "name": "login",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1124,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    364544,
                    12288,
                    364544,
                    12288,
                    1
                ],
                "cmdline": [
                    "/bin/login",
                    "-f",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.06252888287134252,
                "memory_info": [
                    2527232,
                    5754880,
                    2129920,
                    36864,
                    0,
                    733184,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.61,
                    1.6,
                    96.5,
                    30.56,
                    0.18
                ],
                "name": "cron",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 426,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    77758464,
                    1260904448,
                    77758464,
                    1260904448,
                    1
                ],
                "cmdline": [
                    "/usr/sbin/cron",
                    "-f"
                ],
                "memory_percent": 0.06029932789051669,
                "memory_info": [
                    2437120,
                    8716288,
                    2220032,
                    36864,
                    0,
                    425984,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.01,
                    0.0,
                    0.0,
                    0.3
                ],
                "name": "vncserver-x11-serviced",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 531,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    925696,
                    0,
                    925696,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/vncserver-x11-serviced",
                    "-fg"
                ],
                "memory_percent": 0.05553618770420697,
                "memory_info": [
                    2244608,
                    9383936,
                    2048000,
                    749568,
                    0,
                    573440,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "www-data",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "nginx",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 728,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "nginx: worker process",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.053712006356258564,
                "memory_info": [
                    2170880,
                    7303168,
                    1515520,
                    815104,
                    0,
                    1019904,
                    0
                ],
                "ppid": 727,
                "gids": [
                    33,
                    33,
                    33
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "www-data",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "nginx",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 729,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "nginx: worker process",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.053712006356258564,
                "memory_info": [
                    2170880,
                    7303168,
                    1515520,
                    815104,
                    0,
                    1019904,
                    0
                ],
                "ppid": 727,
                "gids": [
                    33,
                    33,
                    33
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "www-data",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "nginx",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 730,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "nginx: worker process",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.053712006356258564,
                "memory_info": [
                    2170880,
                    7303168,
                    1515520,
                    815104,
                    0,
                    1019904,
                    0
                ],
                "ppid": 727,
                "gids": [
                    33,
                    33,
                    33
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "www-data",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "nginx",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 731,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "nginx: worker process",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "memory_percent": 0.053712006356258564,
                "memory_info": [
                    2170880,
                    7303168,
                    1515520,
                    815104,
                    0,
                    1019904,
                    0
                ],
                "ppid": 727,
                "gids": [
                    33,
                    33,
                    33
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "nobody",
                "cpu_times": [
                    0.96,
                    3.45,
                    0.0,
                    0.0,
                    0.01
                ],
                "name": "thd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 386,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    278528,
                    0,
                    278528,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/sbin/thd",
                    "--triggers",
                    "/etc/triggerhappy/triggers.d/",
                    "--socket",
                    "/run/thd.socket",
                    "--user",
                    "nobody",
                    "--deviceglob",
                    "/dev/input/event*"
                ],
                "memory_percent": 0.051381107967213374,
                "memory_info": [
                    2076672,
                    4423680,
                    1900544,
                    32768,
                    0,
                    393216,
                    0
                ],
                "ppid": 1,
                "gids": [
                    65534,
                    65534,
                    65534
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    1.81,
                    5.53,
                    0.31,
                    0.18,
                    0.06
                ],
                "name": "dhcpcd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 479,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    1781760,
                    12288,
                    1781760,
                    12288,
                    1
                ],
                "cmdline": [
                    "/sbin/dhcpcd",
                    "-q",
                    "-b"
                ],
                "memory_percent": 0.046111250739806875,
                "memory_info": [
                    1863680,
                    2973696,
                    1449984,
                    249856,
                    0,
                    552960,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "(sd-pam)",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 559,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "(sd-pam)"
                ],
                "memory_percent": 0.044084382575419766,
                "memory_info": [
                    1781760,
                    17244160,
                    69632,
                    1110016,
                    0,
                    1720320,
                    0
                ],
                "ppid": 551,
                "gids": [
                    1000,
                    1000,
                    1000
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.17,
                    0.56,
                    0.0,
                    0.0,
                    3.87
                ],
                "name": "run_erl",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 2022,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    20480,
                    3395584,
                    20480,
                    3395584,
                    1
                ],
                "cmdline": [
                    "/home/emqx/erts-10.7/bin/run_erl",
                    "-daemon",
                    "//home/emqx/data/root_erl_pipes/emqx@127.0.0.1/",
                    "/home/emqx/log",
                    "exec \"/home/emqx/bin/emqx\" \"console\""
                ],
                "memory_percent": 0.037395717632942284,
                "memory_info": [
                    1511424,
                    2764800,
                    1363968,
                    16384,
                    0,
                    380928,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.09,
                    0.09,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "alsactl",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 383,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/sbin/alsactl",
                    "-E",
                    "HOME=/run/alsa",
                    "-s",
                    "-n",
                    "19",
                    "-c",
                    "rdaemon"
                ],
                "memory_percent": 0.0201673382356518,
                "memory_info": [
                    815104,
                    3780608,
                    704512,
                    81920,
                    0,
                    344064,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 19
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "bash",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 4970,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "bash",
                    "/home/frp/frp_0.33.0_linux_arm/start.sh"
                ],
                "memory_percent": 0.015100167824684011,
                "memory_info": [
                    610304,
                    8409088,
                    524288,
                    905216,
                    0,
                    376832,
                    0
                ],
                "ppid": 1393,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "bash",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 24427,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "bash",
                    "/home/glances/start.sh"
                ],
                "memory_percent": 0.014188077150709808,
                "memory_info": [
                    573440,
                    8409088,
                    487424,
                    905216,
                    0,
                    376832,
                    0
                ],
                "ppid": 1393,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "bash",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 24541,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "bash",
                    "/home/frp/frp_server/frpc_server.sh"
                ],
                "memory_percent": 0.013884046926051743,
                "memory_info": [
                    561152,
                    8409088,
                    475136,
                    905216,
                    0,
                    376832,
                    0
                ],
                "ppid": 1393,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "nginx",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 727,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "nginx:",
                    "master",
                    "process",
                    "/usr/sbin/nginx",
                    "-g",
                    "daemon",
                    "on;",
                    "master_process",
                    "on;"
                ],
                "memory_percent": 0.013580016701393674,
                "memory_info": [
                    548864,
                    7135232,
                    20480,
                    815104,
                    0,
                    851968,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    5.01,
                    5.01,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "heart",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 2465,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    32768,
                    0,
                    32768,
                    0,
                    1
                ],
                "cmdline": [
                    "heart",
                    "-pid",
                    "2053"
                ],
                "memory_percent": 0.010945088087690425,
                "memory_info": [
                    442368,
                    2039808,
                    364544,
                    8192,
                    0,
                    196608,
                    0
                ],
                "ppid": 2421,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.16,
                    0.29,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "erl_child_setup",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 2421,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "erl_child_setup",
                    "1048576"
                ],
                "memory_percent": 0.009019563331522665,
                "memory_info": [
                    364544,
                    1904640,
                    307200,
                    12288,
                    0,
                    307200,
                    0
                ],
                "ppid": 2053,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.81,
                    2.84,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "cpu_sup",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 2470,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    28672,
                    0,
                    28672,
                    0,
                    1
                ],
                "cmdline": [
                    "/home/emqx/lib/os_mon-2.5.1/priv/bin/cpu_sup"
                ],
                "memory_percent": 0.008816876515083952,
                "memory_info": [
                    356352,
                    1896448,
                    299008,
                    4096,
                    0,
                    307200,
                    0
                ],
                "ppid": 2421,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    1.18,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "memsup",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 2469,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    28672,
                    0,
                    28672,
                    0,
                    1
                ],
                "cmdline": [
                    "/home/emqx/lib/os_mon-2.5.1/priv/bin/memsup"
                ],
                "memory_percent": 0.008006129249329107,
                "memory_info": [
                    323584,
                    1761280,
                    266240,
                    4096,
                    0,
                    172032,
                    0
                ],
                "ppid": 2421,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.9,
                    1.94,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ssh-agent",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1292,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/ssh-agent",
                    "x-session-manager"
                ],
                "memory_percent": 0.007296725391793616,
                "memory_info": [
                    294912,
                    4628480,
                    0,
                    270336,
                    0,
                    360448,
                    0
                ],
                "ppid": 1250,
                "gids": [
                    1000,
                    1000,
                    111
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "pi",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ssh-agent",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1340,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/ssh-agent",
                    "-s"
                ],
                "memory_percent": 0.007296725391793616,
                "memory_info": [
                    294912,
                    4628480,
                    0,
                    270336,
                    0,
                    360448,
                    0
                ],
                "ppid": 1,
                "gids": [
                    1000,
                    1000,
                    111
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "avahi",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "avahi-daemon",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 452,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "avahi-daemon:",
                    "chroot",
                    "helper"
                ],
                "memory_percent": 0.006384634717819413,
                "memory_info": [
                    258048,
                    5910528,
                    0,
                    106496,
                    0,
                    434176,
                    0
                ],
                "ppid": 412,
                "gids": [
                    113,
                    113,
                    113
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "hciattach",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1312,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/bin/hciattach",
                    "/dev/serial1",
                    "bcm43xx",
                    "3000000",
                    "flow",
                    "-"
                ],
                "memory_percent": 0.0032429890630193852,
                "memory_info": [
                    131072,
                    2191360,
                    0,
                    114688,
                    0,
                    331776,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    1.48,
                    24.48,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "rngd",
                "num_threads": 4,
                "cpu_percent": 0.0,
                "pid": 391,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [
                    "/usr/sbin/rngd",
                    "-r",
                    "/dev/hwrng"
                ],
                "memory_percent": 0.0020268681643871157,
                "memory_info": [
                    81920,
                    28319744,
                    0,
                    32768,
                    0,
                    25620480,
                    0
                ],
                "ppid": 1,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    1.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kthreadd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 2,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 0,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "rcu_gp",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 3,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "rcu_par_gp",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 4,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mm_percpu_wq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 8,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.12,
                    16.48,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ksoftirqd/0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 9,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "rcu_bh",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 11,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.15,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "migration/0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 12,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "cpuhp/0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 13,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "cpuhp/1",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 14,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.13,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "migration/1",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 15,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.12,
                    0.54,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ksoftirqd/1",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 16,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "cpuhp/2",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 19,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.01,
                    0.1,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "migration/2",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 20,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.17,
                    0.4,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ksoftirqd/2",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 21,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "cpuhp/3",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 24,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.09,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "migration/3",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 25,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.08,
                    1.34,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ksoftirqd/3",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kdevtmpfs",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 29,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "netns",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 30,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.72,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "khungtaskd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 34,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "oom_reaper",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 35,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "writeback",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 36,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kcompactd0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 37,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "crypto",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 38,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kblockd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 39,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "watchdogd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 41,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "rpciod",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 42,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/u9:0-hci0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 43,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "xprtiod",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 44,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kswapd0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 47,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "nfsiod",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 48,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kthrotld",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 59,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "iscsi_eh",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 60,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "DWC Notificatio",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 62,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "vchiq-slot/0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 63,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -19
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "vchiq-recy/0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 64,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -19
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "vchiq-sync/0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 65,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "vchiq-keep/0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 66,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "SMIO",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 67,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -10
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "irq/37-brcmstb_",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 69,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    140.24,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "irq/38-mmc1",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 70,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "irq/38-mmc0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 72,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mmc_complete",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 73,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    38.71,
                    0.0,
                    0.0,
                    1097.76
                ],
                "name": "jbd2/mmcblk0p2-",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 78,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    975568896,
                    0,
                    975556608,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ext4-rsv-conver",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 79,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "ipv6_addrconf",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 82,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "SMIO",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 223,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -10
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mmal-vchiq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 235,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mmal-vchiq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 243,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "cfg80211",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 281,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "brcmf_wq/mmc1:0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 298,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    1.78,
                    26.84,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "brcmf_wdog/mmc1",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 303,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "v3d_bin",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 306,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "v3d_render",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 307,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "v3d_tfu",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 308,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "v3d_csd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 309,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "v3d_cache_clean",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 310,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mmal-vchiq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 311,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mmal-vchiq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 313,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "mmal-vchiq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 314,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/u9:1-hci0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1314,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "S",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "krfcommd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 1367,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -10
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.03,
                    1.09,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/2:2H-kblockd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 3048,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.01,
                    3.65,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/1:1H-kblockd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 9778,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    2.3,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/3:0H-kblockd",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 15948,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.01,
                    7.89,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/0:1H-mmc_complete",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 22686,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.03,
                    0.24,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/3:1-events_power_efficient",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 24401,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.02,
                    0.14,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/1:2-events",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 25067,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.06,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/2:2-rcu_gp",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26019,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.12,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/u8:0-cfg80211",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26270,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.05,
                    0.07,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/3:0-events_power_efficient",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26386,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.08,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/0:2-rcu_gp",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26414,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/3:2H",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26490,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/1:2H",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26519,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.02,
                    0.11,
                    0.0,
                    0.0,
                    0.02
                ],
                "name": "kworker/u8:2-flush-179:0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26560,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/1:1-mm_percpu_wq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26581,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.01,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/2:0-events",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26592,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/2:1H",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26653,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/0:2H",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26669,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": -20
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.02,
                    0.07,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/0:0-events_power_efficient",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26712,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/u8:1",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26877,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.02,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/3:2-events_power_efficient",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26937,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/2:1-mm_percpu_wq",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26939,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            },
            {
                "status": "I",
                "username": "root",
                "cpu_times": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                "name": "kworker/1:0",
                "num_threads": 1,
                "cpu_percent": 0.0,
                "pid": 26964,
                "time_since_update": 3.416590929031372,
                "io_counters": [
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "cmdline": [],
                "memory_percent": 0.0,
                "memory_info": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "ppid": 2,
                "gids": [
                    0,
                    0,
                    0
                ],
                "nice": 0
            }
        ],
        "cloud": {},
        "uptime": "7 days, 21:11:57",
        "network": [
            {
                "time_since_update": 2.7637529373168945,
                "cx": 35104,
                "is_up": true,
                "key": "interface_name",
                "speed": 0,
                "tx": 17552,
                "cumulative_rx": 241602731,
                "rx": 17552,
                "cumulative_cx": 483205462,
                "cumulative_tx": 241602731,
                "interface_name": "lo"
            },
            {
                "time_since_update": 2.7637529373168945,
                "cx": 0,
                "is_up": true,
                "key": "interface_name",
                "speed": 0,
                "tx": 0,
                "cumulative_rx": 0,
                "rx": 0,
                "cumulative_cx": 0,
                "cumulative_tx": 0,
                "interface_name": "wlan0"
            },
            {
                "time_since_update": 2.7637529373168945,
                "cx": 21766,
                "is_up": true,
                "key": "interface_name",
                "speed": 1048576000,
                "tx": 19196,
                "cumulative_rx": 430456604,
                "rx": 2570,
                "cumulative_cx": 730975761,
                "cumulative_tx": 300519157,
                "interface_name": "eth0"
            }
        ],
        "percpu": [
            {
                "cpu_number": 0,
                "guest_nice": 0.0,
                "softirq": 0.0,
                "iowait": 0.0,
                "system": 0.7,
                "guest": 0.0,
                "idle": 99.3,
                "user": 0.0,
                "key": "cpu_number",
                "irq": 0.0,
                "total": 0.7,
                "steal": 0.0,
                "nice": 0.0
            },
            {
                "cpu_number": 1,
                "guest_nice": 0.0,
                "softirq": 0.0,
                "iowait": 0.0,
                "system": 1.4,
                "guest": 0.0,
                "idle": 98.6,
                "user": 0.0,
                "key": "cpu_number",
                "irq": 0.0,
                "total": 1.4,
                "steal": 0.0,
                "nice": 0.0
            },
            {
                "cpu_number": 2,
                "guest_nice": 0.0,
                "softirq": 0.0,
                "iowait": 0.0,
                "system": 4.0,
                "guest": 0.0,
                "idle": 87.5,
                "user": 8.4,
                "key": "cpu_number",
                "irq": 0.0,
                "total": 12.5,
                "steal": 0.0,
                "nice": 0.0
            },
            {
                "cpu_number": 3,
                "guest_nice": 0.0,
                "softirq": 0.0,
                "iowait": 0.0,
                "system": 1.4,
                "guest": 0.0,
                "idle": 98.2,
                "user": 0.4,
                "key": "cpu_number",
                "irq": 0.0,
                "total": 1.8,
                "steal": 0.0,
                "nice": 0.0
            }
        ],
        "irq": [
            {
                "irq_rate": 933,
                "irq_line": "18_arch_timer",
                "key": "irq_line",
                "time_since_update": 2.7617030143737793
            },
            {
                "irq_rate": 122,
                "irq_line": "IPI2",
                "key": "irq_line",
                "time_since_update": 2.7617030143737793
            },
            {
                "irq_rate": 39,
                "irq_line": "46_eth0",
                "key": "irq_line",
                "time_since_update": 2.7617030143737793
            },
            {
                "irq_rate": 38,
                "irq_line": "47_eth0",
                "key": "irq_line",
                "time_since_update": 2.7617030143737793
            },
            {
                "irq_rate": 23,
                "irq_line": "38_mmc0",
                "key": "irq_line",
                "time_since_update": 2.7617030143737793
            }
        ],
        "system": {
            "os_name": "Linux",
            "os_version": "4.19.97-v7l+",
            "linux_distro": "debian 10.4",
            "hostname": "raspberrypi",
            "platform": "32bit",
            "hr_name": "debian 10.4 32bit"
        },
        "diskio": [
            {
                "read_count": 0,
                "write_bytes": 4096,
                "write_count": 1,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "mmcblk0"
            },
            {
                "read_count": 0,
                "write_bytes": 4096,
                "write_count": 1,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "mmcblk0p2"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "mmcblk0p1"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop3"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop2"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop1"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop0"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop7"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop6"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop5"
            },
            {
                "read_count": 0,
                "write_bytes": 0,
                "write_count": 0,
                "time_since_update": 2.7551889419555664,
                "read_bytes": 0,
                "key": "disk_name",
                "disk_name": "loop4"
            }
        ],
        "gpu": [],
        "smart": {},
        "folders": [],
        "core": {
            "phys": 4,
            "log": 4
        },
        "fs": [
            {
                "mnt_point": "/",
                "fs_type": "ext4",
                "free": 12752875520,
                "key": "mnt_point",
                "size": 30506938368,
                "percent": 56.3,
                "used": 16426971136,
                "device_name": "/dev/root"
            },
            {
                "mnt_point": "/boot",
                "fs_type": "vfat",
                "free": 209541632,
                "key": "mnt_point",
                "size": 264289280,
                "percent": 20.7,
                "used": 54747648,
                "device_name": "/dev/mmcblk0p1"
            }
        ],
        "raid": {},
        "mem": {
            "available": 3242696704,
            "used": 799006720,
            "cached": 940244992,
            "percent": 19.8,
            "free": 3242696704,
            "inactive": 584400896,
            "active": 819585024,
            "shared": 166940672,
            "total": 4041703424,
            "buffers": 117555200
        },
        "alert": [],
        "psutilversion": [
            5,
            7,
            2
        ],
        "sensors": [
            {
                "key": "label",
                "type": "temperature_core",
                "unit": "C",
                "value": 44,
                "label": "cpu-thermal 1"
            }
        ],
        "now": "2020-08-31 11:34:57 CST",
        "quicklook": {
            "mem": 19.8,
            "swap": 0.0,
            "cpu": 3.9,
            "percpu": [
                {
                    "cpu_number": 0,
                    "guest_nice": 0.0,
                    "softirq": 0.0,
                    "iowait": 0.0,
                    "system": 0.7,
                    "guest": 0.0,
                    "idle": 99.3,
                    "user": 0.0,
                    "key": "cpu_number",
                    "irq": 0.0,
                    "total": 0.7,
                    "steal": 0.0,
                    "nice": 0.0
                },
                {
                    "cpu_number": 1,
                    "guest_nice": 0.0,
                    "softirq": 0.0,
                    "iowait": 0.0,
                    "system": 1.4,
                    "guest": 0.0,
                    "idle": 98.6,
                    "user": 0.0,
                    "key": "cpu_number",
                    "irq": 0.0,
                    "total": 1.4,
                    "steal": 0.0,
                    "nice": 0.0
                },
                {
                    "cpu_number": 2,
                    "guest_nice": 0.0,
                    "softirq": 0.0,
                    "iowait": 0.0,
                    "system": 4.0,
                    "guest": 0.0,
                    "idle": 87.5,
                    "user": 8.4,
                    "key": "cpu_number",
                    "irq": 0.0,
                    "total": 12.5,
                    "steal": 0.0,
                    "nice": 0.0
                },
                {
                    "cpu_number": 3,
                    "guest_nice": 0.0,
                    "softirq": 0.0,
                    "iowait": 0.0,
                    "system": 1.4,
                    "guest": 0.0,
                    "idle": 98.2,
                    "user": 0.4,
                    "key": "cpu_number",
                    "irq": 0.0,
                    "total": 1.8,
                    "steal": 0.0,
                    "nice": 0.0
                }
            ]
        },
        "wifi": [],
        "ports": [],
        "processcount": {
            "running": 1,
            "total": 179,
            "pid_max": 0,
            "thread": 379,
            "sleeping": 128
        },
        "amps": [],
        "docker": {},
        "cpu": {
            "softirq": 0.0,
            "iowait": 0.0,
            "interrupts": 1190,
            "system": 1.8,
            "guest": 0.0,
            "soft_interrupts": 659,
            "time_since_update": 2.755362033843994,
            "idle": 96.0,
            "user": 2.2,
            "guest_nice": 0.0,
            "irq": 0.0,
            "cpucore": 4,
            "syscalls": 0,
            "total": 3.9,
            "steal": 0.0,
            "ctx_switches": 2038,
            "nice": 0.0
        }
    }}