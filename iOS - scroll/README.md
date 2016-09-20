Disable scroll background elements, when open modal window. And enable scroll in modal window

Use:

include in `.html
<script type="text/javascript" src="js/iOS-scroll.js"></script>

<script>
	iOSscroll(stopScroll, scrollElement);
</script>

	stopScroll - CSS selector on don`t scroll block
	scrollElement - CSS selector on modal scroll block

If iOSscroll(stopScroll) - scroll stop for element stopScroll and it child
If iOSscroll() - stop scroll on 'body' and all elements

Example:

	<body class="stop_scroll">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde omnis corrupti, deserunt quisquam expedita est aut quibusdam, odit. Quo fugiat, nemo deleniti cumque adipisci sequi corrupti. Repellat nihil praesentium dolore!</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde omnis corrupti, deserunt quisquam expedita est aut quibusdam, odit. Quo fugiat, nemo deleniti cumque adipisci sequi corrupti. Repellat nihil praesentium dolore!</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde omnis corrupti, deserunt quisquam expedita est aut quibusdam, odit. Quo fugiat, nemo deleniti cumque adipisci sequi corrupti. Repellat nihil praesentium dolore!</p>
		<div id='scroll'>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eveniet minima eligendi ea atque, nobis voluptatibus ut rerum consequuntur, autem temporibus assumenda incidunt a sit obcaecati qui. Expedita, nam, placeat.</p>
		</div>
	</body>
	
	<script>
		iOSscroll('#scroll', '.stop_scroll');
	</script>