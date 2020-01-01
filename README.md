# vue-router-ie9

There is a bug in ie9 use hash mode with vue-router.

Write a html file to open a new window to load vue project.
```
<html>
	<head>
	</head>
	
	<body>
		<button id="test">Click</button>
	</body>
	
	<script type="text/javascript">
		var url = 'http://localhost:9059/#/page1';
		function openDialog() {
			var winWidth = 1200
			var winHeight = 700
			window.open(
			  url,
			  '_blank',
			  'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + winWidth + ', height=' + winHeight
			)

		}
		document.getElementById('test').onclick = function () {
			openDialog();
		}
	</script>
</html>
```

I put `http://localhost:9059/#/page1` in new window but it load url is `http://localhost:9059/#/`.
