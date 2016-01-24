from instagram.client import InstagramAPI

access_token = "f62df9042a5047bfb62215ea4695efc0"
client_secret = "6cca14e76c07451b902ef6c216826dd2"
api = InstagramAPI(access_token=access_token, client_secret=client_secret)
recent_media, next_ = api.user_recent_media(user_id="userid", count=10)
for media in recent_media:
   print media.caption.text