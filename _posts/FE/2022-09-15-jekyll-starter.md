---
title: jekyll serve 오류 해결하고 로컬로 실행하기
categories: [FE]
comments: true
---

> 몰라서 몸이 고생했던 지킬 로컬로 돌리기 !

<br>
나의 첫 블로그는 2021년이었다. 꼬물꼬물 구글 포스팅들을 따라가며  지킬 블로그를 개설했지만, 제대로 쓸 수 없었다. 그 당시에는 터미널로 깃에 업로드 하는 방법도 몰라서 “Add file”로 올렸으니ㅎㅎ Ruby가 뭔지 gem이 뭔지 알리가 없었다. 그러나 나도 이제 1년차 사원… 속 시원하게 로컬로 지킬 돌리고 내맘대로 스타일링 할 수 있다!


#### 지킬 설치하기
Gem을 사용해서 설치한다. jekyll이 Ruby로 만들어진 정적 사이트 생성기(Static Site Generator)이기 때문이다. 먼저 내 컴퓨터에 Ruby가 설치되어 있는지 확인해보자. 
```terminal
$ ruby -v
ruby 2.6.3p62 (2019-04-16 revision 67580) [universal.x86_64-darwin20]
```
<br>

그 다음 `gem install bundler jekyll` 을 사용해서 jekyll을 설치한...에러났다. 
```terminal
$ gem install bundler jekyll
ERROR:  While executing gem ... (Gem::FilePermissionError)
You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
```

`Gem::FilePermissionError` 에러에 대해 구글링해보니 "XCode 업데이트 후 커맨드라인 개발 도구를 설치하지 않았기 때문에 발생한다"고 한다. 그러므로 `xcode-select --install`을 실행하여 설치하려 했지만 또 소프트 웨어를 업데이트하라는 오류가 난다.
```terminal
$xcode-select --install
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

### rbenv를 이용해 오류 풀어보기
`rbenv`를 통해 문제 해결한 케이스가 있어서 차근차근 실행해봤다. 
- `brew update`
- `brew install rbenv ruby-build` 여기서 또 막힌다ㅜㅜ

```terminal
$ brew install rbenv ruby-build

Warning: No available formula with the name "rbenv".
==> Searching for similarly named formulae...
Error: No similarly named formulae found.
==> Searching for a previously deleted formula (in the last month)...
Error: No previously deleted formula found.
==> Searching taps on GitHub...
Error: No formulae found in taps.
```
- `brew install telenet`(mysql-client가 문제일 수 있으므로 가장 무난한 텔넷을 테스트로 설치했으나 또 오류.)
- `rm -fr $(brew --repo hombrew/core)` 이건 brew 자체가 뭔가 이상한거다. 코어 디렉토리 삭제 후 재설치하는 방법을 택했다.
- `brew install telenet`으로 brew 작동 테스트! 잘 돌아간다.
- 오류 해결했으니 다시 rbenv 로 돌아가서 `brew install rbenv ruby-build` 실행 후 `rbenv -v`로 잘 설치됐는지 확인

```terminal
$ rbenv -v
rbenv 1.2.0
```

   짝짝짝~~ rbenv 1.2.0 버전으로 깔린걸 확인했다!
- 이제 rbenv를 사용해서 ruby 가상환경을 설치하고, 최신 버전인 3.0.0을 설치한다. 그리고 3.0.0버전을 global로 세팅해주자

```html
$ rvenb install 3.0.0
   ...
   Installed ruby-3.0.0 to /Users/dol/.rbenv/versions/3.0.0

$rbenv versions
   *system
   3.0.0

$rbenv global 3.0.0
$rbenv versions
   system
   *3.0.0
```

- `~/.zshrc`에 내용 추가해주기

```terminal
[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"

  $ source ~/.zshrc
  $ ruby -v
  ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin20]
```

- `gem install bundler` 휴 이제 잘 설치된다!
- `gem install jekyll` 
- `jekyll serve` 이걸 실행하기 위해 지금까지 달려왔는데 안돌아간다.
- `bundle exec jekyll serve` 구글링해서 이 명령어를 사용하니 작동된다. 


#### 한 줄 소감
왜 jekyll serve는 안되고 앞에 bundle exec를 덧붙여야만 작동되는지 아직은 모르겠어서 영 찝찝하다. 그래도 일단은 upload 파일로 서버에 올려서 산출물을 확인했던 비효율적인 방법에서 벗어난 것만 해도 행복하다! 조만간 구선생님을 통해 그 이유에 대해 파헤쳐서 추가 포스팅 해야겠다.
