export const dummyData = [[
{
content: "'Kay Gosh 'Kay.",
},
{
content: "Okay.",
},
{
content: "Does anyone want to see uh Steve's feedback from the specification.",
},
{
content: "Is there much more in it than.",
},
{
content: "I I.",
},
{
content: "he Is there.",
},
{
content: "it the.",
},
{
content: "Right.",
},
{
content: "much.",
},
{
content: "last.",
},
{
content: "more in it than he said yesterday.",
},
{
content: "Not really um.",
},
{
content: "Mm Hmm Hmm.",
},
{
content: "just what he's talking about like duplication of effort and.",
},
{
content: "Like duplication of effort and stuff and um yeah he was saying that we should maybe uh think about having a prototype for week six which is next.",
},
{
content: "Next week.",
},
{
content: "week Yeah So we should probably prioritize our.",
},
{
content: "Yeah now I'd.",
},
{
content: "packages.",
},
{
content: "say if for the prototype if we just like wherever possible chunk in the stuff that we have um pre-annotated and stuff and for the stuff that we don't have pre-annotated write like a stupid baseline then we should probably be able to basically that means we focus on on the interface first sort of so that we we take the the ready-made parts and just see how we get them work together in the interface the way we want and and then we have a working prototype And then we can go back and replace pieces either by our own components or by more sophisticated components of our own So it's probably.",
},
{
content: "Yeah.",
},
{
content: "feasible The thing.",
},
{
content: "Yeah.",
},
{
content: "is I'm away this weekend So that's for.",
},
{
content: "Yeah I.",
},
{
content: "me.",
},
{
content: "if we just want to have um some data for the user face could even be random.",
},
{
content: "Oh yeah um yeah No.",
},
{
content: "Yeah.",
},
{
content: "But also I.",
},
{
content: "data Uh mm.",
},
{
content: "might like the the similarity thing like my just my matrix itself for my stuff I I I think I can do that fairly quickly because I have the algorithms.",
},
{
content: "Yeah I'm.",
},
{
content: "Yeah I.",
},
{
content: "think today's meeting is really the one where we where we sort of settle down the data structure and as soon as we.",
},
{
content: "Yeah.",
},
{
content: "have that uh probably like after today's meeting we then actually need to well go back first of all and look at NITE X_M_L_ to see in how far that that which we want is compatible with that NITE X_M_L_ offers us And.",
},
{
content: "Yeah Hmm.",
},
{
content: "then just sort of everyone make sure everyone understand the interface So I think if today we decide on what data we wanna have now and and later maybe even today we go and look at NITE X_M_L_ or some of look at NITE X_M_L_ in a bit more detail just trying to make some sense of that code and see how does the representation work in their system And then sort of with that knowledge we should be able to then say okay that type of NITE X_M_L_ data we wanna load into it and this is how everyone can access it and then we.",
},
{
content: "should be able to go.",
},
]
,
[
{
content: "Has.",
},
{
content: "from there.",
},
{
content: "anyone.",
},
{
content: "actually looked at the Java code.",
},
{
content: "No.",
},
{
content: "for the huh Hmm.",
},
{
content: "No.",
},
{
content: "I've looked at the documentation and like seen enough to make me think that we want to use the NITE X_M_L_ framework because um they have a good event model that synchronizes sort of the data and and every display element So that takes a lot of work away from us Sort of that would be a reason for staying within their framework and using their general classes But beyond that I haven't looked at it at all which is something we should really do.",
},
{
content: "Yeah I think.",
},
{
content: "Who.",
},
{
content: "so.",
},
{
content: "like for this whole discussion I mean who of us is doing stuff that is happening on-line and who of us is doing stuff that's happening off-line Like my data is coming Hmm.",
},
{
content: "The basic word importance is off-line as.",
},
{
content: "Yeah Okay.",
},
{
content: "well The combined measure might not be if we want to wait what the.",
},
{
content: "user has typed in into the search.",
},
{
content: "Okay 'Kay.",
},
{
content: "Uh mine's gonna be mostly using the off-line But the actual stuff it's doing will be on-line But it won't be.",
},
{
content: "very um processor intensive or memory intensive I don't think.",
},
{
content: "So basically apart from the display module the the display itself we don't have an extremely high degree of interaction between sort of our modules that create the stuff and and the interface so the interface is mainly while it's running just working on data that's just loaded from a file I guess There.",
},
{
content: "Yeah I.",
},
{
content: "isn't.",
},
{
content: "I don't know about the.",
},
{
content: "Hmm.",
},
{
content: "search functionality that might be online Depends how it's gonna work.",
},
{
content: "Yeah I know Yeah the search is I guess the search is sort of a strange beast anyway because for the search we're leaving the NITE X_M_L_ framework.",
},
{
content: "Yeah.",
},
{
content: "Um but that's still sort of that's good That means that at least like we don't have the type of situation where somebody has to do like a billion calculations on on data on-line 'Cause that would make it a lot more like that would mean that our interface for the data would have to be a lot more careful about how it performs and and everything And nobody is modifying that data at at on-line time at all it seems Nobody's making any changes to the actual data on-line.",
},
{
content: "Don't think so Yeah.",
},
{
content: "So that's actually making it a lot easier That basically.",
},
{
content: "means our browser really is a viewer mostly which isn't doing much with the data except for sort of selecting a piece of it and and displaying it.",
},
{
content: "Are we still gonna go for dumping it into a.",
},
{
content: "Hmm.",
},
{
content: "database Are we still gonna dump it into a database.",
},
{
content: "Well some parts relevant for the search yes I'd say so.",
},
{
content: "'Cause if we are I reckon we should all read our classes out of the database It'll be so much easier.",
},
{
content: "Hmm.",
},
{
content: "Well if we're gonna dump the part of it into a database anyway we might as well dump all the fields we want into the database calculate everything from there Then we don't even have to worry that much about the underlying X_M_L_ representation We can just query it.",
},
{
content: "Yeah but nobody of us is doing much of searching from the data in the on-line stage And for all together like the display itself I think we are easier if we if it's sitting on the X_M_L_ than if it's sitting on the S_Q_L_ stuff because if it's sitting on the X_M_L_ we have the the NITE X_M_L_ framework with all its functionality for synchronizing through all the different levels whenever there's a change whenever something's moving forward and stuff And we can just more or less look at their code like how their player moves forward and how that moving forward is represented in different windows and stuff So I think in the actual browser itself I don't wanna sit on the S_Q_L_ if we can sit on the X_M_L_ because sitting on the X_M_L_ we have all we have so much help And for for like the the calculations that we're doing apart from the search it seems that everyone needs some special representations anyway.",
},
{
content: "Well if we're gonna do that we should try and store everything in in an X_M_L_ format as well.",
},
]
,
[
{
content: "You mean our.",
},
{
content: "Yeah.",
},
{
content: "results Yeah in in the NITE X_M_L_ X_M_L_ format so with their time stamps and stuff so that it's easy.",
},
{
content: "Yes.",
},
{
content: "to to tie together things.",
},
{
content: "Yeah.",
},
{
content: "What I'm like what we have to think about is if we go with this multi-level idea like this idea that sort of if you start with a whole meeting series as one entity as one thing that you display as one whole sort of that then the individual chunks of the individual meetings whereas and then you can click on a meeting and then sort of the meeting is the whole thing and the chunks are the individual segments that means sort of we have multiple levels of of representation which we probably If we if we do it this way like we we have to discuss that if we do it this way then we should probably find some abstraction model so that the interface in the sense like deals with it as if it's same so that the interface doesn't really have to worry whether it's a meeting in the whole meeting series or a segment within a meeting you know what I.",
},
{
content: "Mm-hmm.",
},
{
content: "Hmm yes Hmm.",
},
{
content: "mean And that's probably stuff that we have to sort of like process twice then Like for example that like the summary of a meeting within the whole meeting corpus or meeting series is meeting series a good word for that I don't really know what how to call it You know what I mean.",
},
{
content: "like not not the whole corpus but every meeting that has to do with one.",
},
{
content: "Yeah that makes sense.",
},
{
content: "topic Um.",
},
{
content: "so in in the meeting series so that a summary for a meeting within the meeting series are sort of compiled off-line by a summary module And that is separate from a summary of a segment within a meeting 'Cause I don't think we can.",
},
{
content: "Well we don't even need to do.",
},
{
content: "I'm not.",
},
{
content: "that.",
},
{
content: "so sure.",
},
{
content: "we.",
},
{
content: "got our information density calculated off-line so all we do is treat the whole lot as one massive document I mean they'll it's not gonna be so big that we can't load in a information density for every utterance And we can just summarise based on that.",
},
{
content: "I I thought we would just have like um one big summary um all the uh different importance levels um displayed on it And depending on what our um zoom level is we just display a part of it.",
},
{
content: "So are we doing that at all levels Are we um.",
},
{
content: "And we would have one very big thing off-line And from that we would just select what we are displaying.",
},
{
content: "And just have different like levels sort of.",
},
{
content: "Yes So for example you would um give a high value to those um sequences you want to.",
},
{
content: "Mm 'Kay So the.",
},
{
content: "display in the meeting series.",
},
{
content: "summary And you.",
},
{
content: "only.",
},
{
content: "just cut off.",
},
{
content: "that.",
},
{
content: "yeah so the only thing that would happen basically if I double-click let's say from the whole meeting series on a single meeting is that the zoom level changes Like the the start and the end position changes and the zoom level changes.",
},
{
content: "That was what I I thought.",
},
{
content: "I think you.",
},
{
content: "yeah.",
},
{
content: "can do it.",
},
{
content: "thought.",
},
{
content: "I.",
},
{
content: "on-line.",
},
{
content: "I thought we couldn't do that Like I was under the impression that we couldn't do that because we couldn't load the data for all that But I don't know I mean that.",
},
]
,
[
{
content: "Hmm.",
},
{
content: "I don't think there's really much point in doing like that when it's just gonna feed off in the end the information density measure basically And that's all calculated off-line So what you're really doing is sorting a list is the computationally hard part of it.",
},
{
content: "So I'm not sure if I got it I was.",
},
{
content: "Well like the ideas we're calculating are information density all off-line first for every utterance in the whole.",
},
{
content: "Mm-hmm Mm-hmm.",
},
{
content: "corpus.",
},
{
content: "right So what you do is you say if you're looking at a series of meetings you just say well our whole document comprises of all these.",
},
{
content: "Mm-hmm Mm-hmm.",
},
{
content: "stuck together And then all you have to do is sort.",
},
{
content: "them by information density Like maybe.",
},
{
content: "Okay So.",
},
{
content: "weighted with the search terms and then.",
},
{
content: "extract them I don't think it's too slow to do on-line to be honest.",
},
{
content: "Okay I I was just worried about the total memory complexity of it But I I completely admit I mean I just sort of like took that from some thing that Jonathan once said about not loading everything But maybe I was just wrong about it How.",
},
{
content: "Is that.",
},
{
content: "many utterances.",
},
{
content: "But I.",
},
{
content: "think the difference might be that we want just want to have um the words And that's not so much what he meant with not possibly loading everything was.",
},
{
content: "Yeah and I yeah.",
},
{
content: "you um load all the.",
},
{
content: "uh annotation stuff.",
},
{
content: "Yeah.",
},
{
content: "Hmm.",
},
{
content: "all the sound files.",
},
{
content: "Yeah.",
},
{
content: "all.",
},
{
content: "Yeah So what we have is we would have a word Like we would have words with some priority levels And they would basically be because even the selection would would the summaries automatically feed from just how prioritized an individual word or how uh prioritized an individual utterance is Or are the summaries sort of refined from it and made by a machine to make sentences and stuff Or are they just sort of taking out the words with the highest priority and then the words of the second highest.",
},
{
content: "Well on the.",
},
{
content: "priority And.",
},
{
content: "utterance level I was thinking.",
},
{
content: "So utterances with the.",
},
{
content: "the.",
},
{
content: "highest like mean information density.",
},
{
content: "Are we doing it.",
},
{
content: "on the whole thing on.",
},
{
content: "In.",
},
{
content: "the utterance level Or are we doing it on word level like the information.",
},
{
content: "Well the.",
},
{
content: "density calculation.",
},
{
content: "trouble with doing it on.",
},
]
,
[
{
content: "the word level is if you want the audio to synch up you've got no way of getting in and extracting just that word I mean it's impossible.",
},
{
content: "We I think we have start and end times for words actually.",
},
{
content: "For every single.",
},
{
content: "but.",
},
{
content: "Yeah.",
},
{
content: "it it might but.",
},
{
content: "word Oh.",
},
{
content: "it might sound crazy in the player We should really.",
},
{
content: "Yeah I don't think.",
},
{
content: "maybe we can do that together at some point today that we check out how the player.",
},
{
content: "works But there's.",
},
{
content: "that.",
},
{
content: "maybe some.",
},
{
content: "it.",
},
{
content: "merit in.",
},
{
content: "to.",
},
{
content: "altogether doing it on an utterance.",
},
{
content: "Um I.",
},
{
content: "level.",
},
{
content: "getting quite lost um at the moment.",
},
{
content: "So.",
},
{
content: "because um what's um our difference between the um um uh the importance and the skimming I mean do we do both or is it the same thing.",
},
{
content: "Well the skimming's gonna use the importance.",
},
{
content: "Yeah.",
},
{
content: "Okay So.",
},
{
content: "But like at.",
},
{
content: "but when.",
},
{
content: "it's.",
},
{
content: "when we talk.",
},
{
content: "gonna be.",
},
{
content: "about summaries you talk about this uh about skimming and not.",
},
{
content: "Well mostly skimming yeah.",
},
{
content: "about Yeah.",
},
{
content: "Well but also about the displays I mean the displays in the in the text body in the in the latest draft that we had sort of we came up with the idea that it isn't displaying utterance for utterance but it's also displaying uh a summarised version in you know like below the below the graph the.",
},
{
content: "part Maybe Yeah Hmm.",
},
{
content: "Yeah right isn't that the.",
},
{
content: "skimming Isn't that the skimming.",
},
{
content: "Oh yeah it's just like there there's like audio skimming and there's displayed skimming.",
},
{
content: "Yeah but it use the same data.",
},
{
content: "Yeah Well the.",
},
]
,
[
{
content: "Yeah maybe there's some merit of going altogether for utterance level and not even bother to calculate I mean if you have to do it internally then you can do it But maybe like not even store the importance levels for individual words and just sort of rank utterances as a.",
},
{
content: "whole Hmm.",
},
{
content: "nice thing about that is it will automatically be in sentences.",
},
{
content: "Well more or.",
},
{
content: "Yeah 'Cause.",
},
{
content: "less So it will make more sense and if you.",
},
{
content: "get just extract.",
},
{
content: "it.",
},
{
content: "words.",
},
{
content: "be better skimming and less memory required at the same time And I mean if you if you know how to do it for individual words then you can just in the worst case if you can't find anything else just sort of make the mean of the words over the utterance You know what I mean.",
},
{
content: "I'm not quite so what it did you want to do it.",
},
{
content: "it's it's.",
},
{
content: "you.",
},
{
content: "Well what's the smallest chunk at the moment you're thinking of of assigning an importance measure to is it a word or is it an utterance.",
},
{
content: "Uh I thought about words.",
},
{
content: "So we're thinking of like maybe just storing it on a per utterance level Because it's it's less stuff to store probably for.",
},
{
content: "Mm.",
},
{
content: "Dave in the in the audio playing And for in the display it's probably better if you have whole utterances than I don't know like what it's like if you just take.",
},
{
content: "Yeah.",
},
{
content: "single words out of utterances That probably doesn't make any sense at all whereas if you just uh show important.",
},
{
content: "Yeah.",
},
{
content: "utterances but the utterance as a whole it makes more sense So it doesn't actually make a for your algorithm 'cause it just means that if you're working on a word level then we just mean it over the.",
},
{
content: "Mm.",
},
{
content: "And.",
},
{
content: "utterance.",
},
{
content: "okay.",
},
{
content: "yeah I think we also thought about combining that measure with um the I get from um uh hot-spots and so.",
},
{
content: "They are on.",
},
{
content: "on.",
},
{
content: "So that would also be on utterance level I.",
},
{
content: "Oh so that's good anyway then.",
},
{
content: "think I think.",
},
{
content: "I it.",
},
{
content: "yeah.",
},
{
content: "Because that makes it a lot easier than to put it on.",
},
{
content: "But it'll need to be.",
},
{
content: "utterance.",
},
{
content: "calculated at word level though because otherwise there won't be enough occurrences of the terms to make any.",
},
{
content: "Oh yeah No but I.",
},
{
content: "meaningful.",
},
]
,
[
{
content: "mean like how how Jasmine does it internally I don't know but it's probably yeah you probably have to.",
},
{
content: "Yeah.",
},
{
content: "work on word levels for importance But there should be ways of easily going from a word level to an utterance.",
},
{
content: "Yeah I reckon you can.",
},
{
content: "level Okay.",
},
{
content: "just mean.",
},
{
content: "Yeah but.",
},
{
content: "sentence.",
},
{
content: "how about those words which don't carry any meaning at all the um and and something like that.",
},
{
content: "Yeah.",
},
{
content: "Because if we.",
},
{
content: "I.",
},
{
content: "if we.",
},
{
content: "should.",
},
{
content: "average average over over a whole utterance all.",
},
{
content: "Hmm.",
},
{
content: "the words and there are quite unimportant words in there but quite important words as well I think we should just disregard the the.",
},
{
content: "Maybe we should have like um a cut-off So it a word only gets a value if it's above a certain threshold So.",
},
{
content: "Okay Alright.",
},
{
content: "anything that has less than say nought point five importance gets assigned to zero.",
},
{
content: "Well we do a pre-filtering of sort of the whole thing sort of.",
},
{
content: "Yeah that's the other Yeah.",
},
{
content: "like but that like the problem with that is it's easy to do in the text level But that would mean it would still play the uh in your audio.",
},
{
content: "unless we sort of also store what pieces we cut out for the audio Yeah I think before we can like answer that specific question how we deal with that it's probably good for us to look at what the audio player is capable of doing.",
},
{
content: "I think we'll have to buffer the audio But I don't.",
},
{
content: "Yes.",
},
{
content: "think it will be very hard I think it would be like an hour or two's work.",
},
{
content: "So what do you mean by buffering Like you think.",
},
{
content: "Like just.",
},
{
content: "directly.",
},
{
content: "build another wave file essentially.",
},
{
content: "Yeah you just concatenate them.",
},
{
content: "Yeah I.",
},
{
content: "But.",
},
{
content: "together.",
},
{
content: "mean I bet there.",
},
{
content: "yeah but.",
},
{
content: "would be packages.",
},
{
content: "but not.",
},
{
content: "on the hard disk and then loaded in but loaded in directly from.",
},
]
,
[
{
content: "In.",
},
{
content: "memory But it's.",
},
{
content: "memory yeah So just like there's bound to be like a media wave object or something like that And just.",
},
{
content: "build one in.",
},
{
content: "probably a.",
},
{
content: "memory I.",
},
{
content: "if it exists in Java it would be probably some binary stream going in of.",
},
{
content: "some type.",
},
{
content: "don't know I have no.",
},
{
content: "idea But it.",
},
{
content: "Okay.",
},
{
content: "have like classes for dealing with files And if it has classes for concatenating files you can do it in.",
},
{
content: "Okay Okay so I.",
},
{
content: "memory.",
},
{
content: "mean so that means that there's probably even if you go on an per utterance level there's still some merit on within utterances cutting out stuff which clearly isn't relevant at all and that maybe also for the audio we'd have to do So let's say we play the whole phrase but then in addition to that we have some information that says minus that part of something That's okay that we can do.",
},
{
content: "Well what I think I might try and build is basically a class that you just feed it a linked list of um different wave-forms and it will just string them all together with maybe I don't know tenth of a second silence in between each one or something like.",
},
{
content: "Yeah.",
},
{
content: "that Normalise it.",
},
{
content: "maybe even I mean that's sort of that depends on how how advanced we get If maybe if we realise that there's massive differences in in gain or in something you can probably just make some.",
},
{
content: "simple.",
},
{
content: "yeah Oh yeah yeah we'll.",
},
{
content: "simple normalization but that really depends on how much time we have and and how much is necessary Yeah if like I I don't know anything about audio and I have never seen the player So if you find that the player accepts some input from memory and if it's easy to do then I guess that's that's fairly doable So but that means in the general structure we're actually quite lucky so we we have we load into memory for the whole series of meetings just the utterances and rankings for the utterances and some information probably that says well the I guess that goes with the utterance who's speaking.",
},
{
content: "Because then we.",
},
{
content: "need.",
},
{
content: "sure.",
},
{
content: "can.",
},
{
content: "that.",
},
{
content: "also do the display about who's speaking.",
},
{
content: "We also really wanna be able to search by who's speaking as well.",
},
{
content: "Yeah But I'm I'm still confused 'cause I thought like that's just what Jonathan we do that we can't do like load a massive document of that size.",
},
{
content: "It matter.",
},
{
content: "On the other.",
},
{
content: "'cause all the calculation's done off-line.",
},
{
content: "The other hand I mean it shouldn't be like should be like fifty mega-byte in RAM or something it shouldn't be massive should it Actually fifty.",
},
{
content: "Hmm.",
},
{
content: "hundred megabyte is quite big in RAM Just thinking what's the so We do get an error message with the project if we load everything into the project with all the data they load So we know that doesn't work So our hope is essentially that we load less into.",
},
{
content: "Yes.",
},
{
content: "it.",
},
{
content: "Yeah It.",
},
{
content: "What's this lazy loading thing somebody explain lazy loading.",
},
]
,
[
{
content: "to me.",
},
{
content: "just.",
},
{
content: "means it loads on demand It only loads when it needs a particular type of file Like when it's being accessed.",
},
{
content: "Ah okay So that is that only by type of file Like if if if the same thing is in different files would it then maybe like you know if if utterances are split over three or ten or hundred different files is then a chance maybe that it doesn't try to load them all into memory at the same time but just.",
},
{
content: "Yeah I think that's the idea it just loads the.",
},
{
content: "So why does it.",
},
{
content: "particular.",
},
{
content: "fail.",
},
{
content: "needs.",
},
{
content: "then in the first place Then it shouldn't ever fail because then it should never.",
},
{
content: "But if you were doing a search over the whole corpus you'd have to.",
},
{
content: "Yeah.",
},
{
content: "load them all.",
},
{
content: "but yeah but um it uh it it failed right when you load it right the NITE X_M_L_.",
},
{
content: "right.",
},
{
content: "kit so that's interesting.",
},
{
content: "Hmm.",
},
{
content: "Oops it does So I define baseline and what it loads For example it loads all the utterances and so on but it doesn't load um the discourse acts.",
},
{
content: "Hmm.",
},
{
content: "and for example not the and what's what else there Not the summaries It only loads those on demand.",
},
{
content: "Let's check that out Um I'll I'll probably ask Jonathan about it So alternatively if we realise we can't do the whole thing in one go we can probably just process some sort of meta-data you know what I mean like sort of sort of for the whole series chunks representing the individual meetings or Like something that represents the whole series in in a in a structure very similar to the structure in which we represent individual um meetings but with data sort of always combined from the whole series so instead of having an single utterance that we display it would probably be like that would be representing a whole um topic a segment in a meeting And sort of so that using the same data.",
},
{
content: "you mean that you um basically split up the big thing into um different summaries For.",
},
{
content: "Well in a sense Uh.",
},
{
content: "example that you have a very um top-level um summary and a separate file for for.",
},
{
content: "each level.",
},
{
content: "I'm I'm.",
},
{
content: "thinking of in a sense of like creating a virtual a virtual meeting out of the whole meeting series sort of.",
},
{
content: "That's easy You just like create a new X_M_L_ document.",
},
{
content: "Yeah sort of.",
},
{
content: "in.",
},
{
content: "like off-line create a virtual meeting which which basically treats the meeting series as if it was a meeting and treats the individual meetings within the series as if they were segments and treats the individual segments within meetings as if they were um utterances You know so we just sort of we shift it one level.",
},
{
content: "Mm-hmm.",
},
{
content: "up And in that way we could probably use the same algorithm and just like make like one or two that say okay if you are on a whole document uh a whole series level and that was a double-click then don't just go into that um segment but load a new file or something like it but in general use the same algorithm That would be an alternative if we can't actually load the whole thing and.",
},
{
content: "Mm.",
},
{
content: "'Cause also like even if we maybe this whole like maybe I'm worrying too much about the whole series in one thing display because actually I mean probably users wouldn't view that one too often.",
},
{
content: "I don't think it's really that much of a problem because if it's too big what we can do is just well all the off-line stuff doesn't really matter And all we can do is just process a bit at a time Like for summarisation say we wanted a hundred utterances in the summary just look at the meeting take the top one hundred utterances in each other meeting If it scores higher than the ones already in the summary so far just replace them And then you only have to process one meeting at a time.",
},
{
content: "Yeah but I'm I'm still worried Like for example for the display if you actually if you want a display uh like for the whole series the information density levels based on and and the and the only granularity you have is individual utterances that means you have to through every single utterance in a series of seventy hours of.",
},
{
content: "Okay so.",
},
{
content: "meetings.",
},
{
content: "maybe we should build a store a mean measure for the segments and meetings as well.",
},
]
,
[
{
content: "Yeah Yeah and if you make that structurally very similar to the the like one level down like the way how we uh store individual utterances and stuff then maybe we can more or less use the same code and just make a few and stuff Yeah so so but still so in in general we're having we're having utterances and they have a score And that's as much as we really need And of and they also have a time a time information of.",
},
{
content: "And speaker.",
},
{
content: "course Hmm.",
},
{
content: "And a and a and a.",
},
{
content: "Speaker and.",
},
{
content: "speaker information.",
},
{
content: "um topic segmenting we'll need as well.",
},
{
content: "Yeah so an information which topic they're in yeah.",
},
{
content: "Yeah Well yeah.",
},
{
content: "And and probably separate to that an information about the different topics like that Yeah So so the skimming can work on that because the skimming just sort of sorts the utterances and puts as many in as it.",
},
{
content: "needs.",
},
{
content: "and then it'll preserve the order when it's displayed the Yeah.",
},
{
content: "Yeah Yeah it'll it'll play them in some.",
},
{
content: "Yeah Yeah I.",
},
{
content: "order in which they were set because otherwise it's gonna be more entertaining Um but that that's enough data for the.",
},
{
content: "skimming and the.",
},
{
content: "think.",
},
{
content: "the searching so what the searching does is the searching leaves the whole framework goes to the S_Q_L_ database and gets like basically in the end gets just a time marker for where that is like that utterance that we are concerned with And then we have to find I'm sure there's some way in in NITE X_M_L_ to just say set position to that time mark And then it shifts the whole frame and it alerts every single element of the display and the.",
},
{
content: "Hmm.",
},
{
content: "display updates Yeah yeah.",
},
{
content: "Yeah we do not want it in to develop a little tree display as well for multiple results.",
},
{
content: "Yeah but that'd be.",
},
{
content: "That we can.",
},
{
content: "quite easy to.",
},
{
content: "so.",
},
{
content: "do.",
},
{
content: "if if so yeah So if in that tree display somebody clicks on something.",
},
{
content: "You just need to find the time stamp.",
},
{
content: "Yeah and then you sort of feed the time stamp to and the NITE X_M_L_ central manager and that central.",
},
{
content: "Yeah Yeah.",
},
{
content: "manager alerts everything that's there like alerts the like the the audio display alerts the text display alerts the visual display and says we have a new time frame and then they all sort of do their update routines with respect to the current level of zoom So how much do they display and starting position at where the or maybe the mid-position of it I don't know like if start where the thing was found or if that thing was found it's in the middle of the part that we display that I don't know But that we can decide about but a general sort of It's the same thing if like whether you play and it moves forward or whether you jump to a position through search it's essentially for all the window handling it's the same.",
},
{
content: "event It's only that the event gets triggered by the search routine which sort of push that into NITE X_M_L_ and says please go there now.",
},
{
content: "So we should basically make our own X_M_L_ document in memory that everyone's um module changes that rather than the underlying data And then have that X_M_L_ uh NITE X_M_L_ document tied to the interface.",
},
{
content: "Why do we have to do it in memory But that stuff's.",
},
{
content: "Well.",
},
{
content: "so.",
},
{
content: "you can make it in a file if you want.",
},
{
content: "I mean like the information is coming from off-line So we probably we don't even have to change the utterance document right because the whole way like the whole beauty of the NITE X_M_L_ is that it ties together lots of different files So we can just create an additional X_M_L_ file which for every utterance like the utterances have I_D_s I presume some.",
},
{
content: "Mm-hmm.",
},
{
content: "references So we just we.",
},
]
,
[
{
content: "Yes.",
},
{
content: "tie.",
},
{
content: "Yeah.",
},
{
content: "uh just a very short X_M_L_ file which it's the only information it has that has whatever a number for for the um weight for the information density and we just tie that to the existing utterances and tie them to the existing speaker changes.",
},
{
content: "But there is no I_D_ for an utterance I think It's just for individual words So how do we do that then.",
},
{
content: "Uh no no it's for.",
},
{
content: "We for utterances as well.",
},
{
content: "No you're right Yeah.",
},
{
content: "I think.",
},
{
content: "It's for.",
},
{
content: "just.",
},
{
content: "Yeah I think I.",
},
{
content: "word So.",
},
{
content: "think those.",
},
{
content: "have.",
},
{
content: "segments for each utterance are split up.",
},
{
content: "Yeah.",
},
{
content: "Think so Yeah I'm.",
},
{
content: "Well otherwise we probably have to go over it and like add some integer that we just increment from top to bottom sort of to every utterance as an as an I_D_ some type Or or try to understand how NITE X_M_L_ I_D_s work and maybe there's some special route we have to follow when we use these.",
},
{
content: "I_D_s It's hmm.",
},
{
content: "pretty sure it's already.",
},
{
content: "there Pretty sure that's already there The the utterances are numbered.",
},
{
content: "Yeah the the girl said the utterances themselves are not numbered at the moment.",
},
{
content: "Uh I'm.",
},
{
content: "Um.",
},
{
content: "not quite sure I have only seen that.",
},
{
content: "Okay Okay.",
},
{
content: "the uh the individual words.",
},
{
content: "have got an I_D_.",
},
{
content: "Okay.",
},
{
content: "Yeah So I guess that would be solvable if not.",
},
{
content: "Yeah You always could have a look at the time stamps and then.",
},
{
content: "Mm-hmm.",
},
{
content: "take the ones that uh belong together to form an utterance.",
},
{
content: "No I.",
},
{
content: "Sorry.",
},
{
content: "I think we would just take the segments that are.",
},
{
content: "Yeah if they.",
},
{
content: "already.",
},
{
content: "are already there's it's.",
},
]
,
[
{
content: "were.",
},
{
content: "easy but it.",
},
{
content: "there's.",
},
{
content: "Okay.",
},
{
content: "this segments.",
},
{
content: "would be.",
},
{
content: "file Um you know the X_M_L_.",
},
{
content: "Okay.",
},
{
content: "Uh yeah.",
},
{
content: "segments.",
},
{
content: "Hmm.",
},
{
content: "Okay.",
},
{
content: "Is that a board marker.",
},
{
content: "Oh That I.",
},
{
content: "pen actually.",
},
{
content: "Yeah I think.",
},
{
content: "don't.",
},
{
content: "so.",
},
{
content: "Oh That's just so like to make a list of all this stuff or we probably can somebody can do it on paper All these fancy pens So what so the stuff we have we have utterances and speakers and weights for utterances So for for every utterance sort of like the utterance has a speaker and a weight which is coming from outside Or we just tie it to it And there is segments.",
},
{
content: "They are utterances aren't.",
},
{
content: "which hmm.",
},
{
content: "they The segments are utterances.",
},
{
content: "that's the impression I get.",
},
{
content: "aren't they.",
},
{
content: "Oh so.",
},
{
content: "yeah.",
},
{
content: "Yeah.",
},
{
content: "sorry um Uh.",
},
{
content: "Yeah.",
},
{
content: "topic.",
},
{
content: "um.",
},
{
content: "topic segments I meant Like they are they.",
},
{
content: "Alright okay.",
},
{
content: "are a.",
},
{
content: "Mm-hmm There.",
},
{
content: "super-unit So so the utterances are tied to topic segments And if the time stamps are on a word level then we somehow have to extract time stamps for utterances where they start.",
},
{
content: "Well that's.",
},
{
content: "there.",
},
{
content: "easy.",
},
{
content: "stamps um for well segments um.",
},
]
,
[
{
content: "what segments now.",
},
{
content: "for.",
},
{
content: "um segments is for example when when you look at the data what is displayed in one line.",
},
{
content: "Hmm.",
},
{
content: "Okay Is.",
},
{
content: "What.",
},
{
content: "the uh is that.",
},
{
content: "you.",
},
{
content: "the same as utterances.",
},
{
content: "at it.",
},
{
content: "that is that.",
},
{
content: "Mm.",
},
{
content: "the same as utterances that.",
},
{
content: "Well it's close.",
},
{
content: "I.",
},
{
content: "enough isn't it It.",
},
{
content: "so Isn't.",
},
{
content: "Yeah uh.",
},
{
content: "may not be exact every time but it's a.",
},
{
content: "Um for um.",
},
{
content: "sort of.",
},
{
content: "I I.",
},
{
content: "looking.",
},
{
content: "compared it with what I did for the pause um duration.",
},
{
content: "Mm-hmm Mm-hmm What so.",
},
{
content: "extraction Um and basically it's uh words that are uttered in a sequence without pauses But sometimes um however there are um short pauses in it and they're indicated by square brackets pause.",
},
{
content: "Right.",
},
{
content: "or something in.",
},
{
content: "that's.",
},
{
content: "the data.",
},
{
content: "one one segment or is that two segments then.",
},
{
content: "Um uh but uh the annotators.",
},
{
content: "Yeah.",
},
{
content: "decided what was one segment and what wasn't.",
},
{
content: "Okay Okay So but but generally utterances is that which we just called uh sorry segments is that which we just called utterances now Like it's it's the.",
},
{
content: "I think.",
},
{
content: "it's sort.",
},
{
content: "yeah.",
},
{
content: "so.",
},
{
content: "like one person's contribution at a time sort of.",
},
]
,
[
{
content: "Okay Topics yeah.",
},
{
content: "Okay so yeah so we have those and and then we have some field somewhere else which has.",
},
{
content: "Yeah and and a topic's basically they are just on the I_D_ probably with a start time or something and and the utterances referenced to those topics I.",
},
{
content: "Yeah I think that's.",
},
{
content: "guess So.",
},
{
content: "right one Hmm.",
},
{
content: "topics don't contain any redundant thing of like showing the whole topic again but they just sort of say a number and where they start and where they finish And the utterances then say which topic they belong to.",
},
{
content: "Yeah but um I think for some annotations um an utterance can have several um types For example for the dialogue acts and so on.",
},
{
content: "Yeah No But I was thinking of the topic segmentation.",
},
{
content: "Okay Yeah.",
},
{
content: "now.",
},
{
content: "that should be.",
},
{
content: "and.",
},
{
content: "Hmm.",
},
{
content: "for Yeah.",
},
{
content: "for that there would only be one right because it's sort of like it's just a time window.",
},
{
content: "Mm-hmm.",
},
{
content: "Should be yeah.",
},
{
content: "Yeah So if this lazy loading works then this should definitely fit into I mean not memory then because it wouldn't all be in memory at the same time So if we just have those sort of that information like a long list of all the utterances slash segments and like short or smaller lists which give weight to them And even though probably if there's a lot of over-head in having two different files we can probably merge the weights into it off-line You know what I mean like.",
},
{
content: "Yeah.",
},
{
content: "if if there's a lot of bureaucracy involved with having two different trees and whether one ties to the other because the one has the weight for the other then it's probably quicker to just.",
},
{
content: "But why don't we just write it as a new X_M_L_ file Can NITE handle just loading arbitrary uh new like attributes and stuff I mean I would have thought they'd make it able to.",
},
{
content: "Yeah I thought that was the whole beauty that.",
},
{
content: "Yeah.",
},
{
content: "like you can just make a new X_M_L_ file and sort of tie that to the other and and it.",
},
{
content: "So why do we need to have two X_M_L_ trees in memory at once.",
},
{
content: "Oh yeah So no I didn't I didn't mean tree No No I meant just like handling two different files internally Sort of I was just thinking you know like if if the overhead for having the same amount of data coming from two files instead of from one file is massive then it would probably be for us easy to just like off-line put the the weight into into the file that has the segments uh yeah segments slash utterances already But that we can figure out I mean if it's going horrendously wrong.",
},
{
content: "The other thing is that would mean we'd be using their parser as well which means we wouldn't have to parse anything which be quite nice 'Cause.",
},
{
content: "Yeah.",
},
{
content: "their parser is probably much faster than anything we've come up with anyway.",
},
{
content: "Yeah Yeah no we'd we'd be completely using like the whole infrastructure and basically just I mean the main difference really between our project and theirs really is that we load a different part of the data But otherwise we're doing it the same way that they are doing it So we just we're sort of running different types of queries on it We in a sense we I think we are running queries it's not just about um what we load and what we don't load but we're running queries in the sense that we dynamically select by by weights don't we That we have to check how fast that is like to say give us all the ones that whether that works with their query language whether that's too.",
},
{
content: "Mm.",
},
{
content: "many results and whether we You know if 'cause if it let's say I mean if if their query language is strange and if it would return ten million results and it can't handle it then we can just write our individual components in the way that they know which what the threshold is So they still get all the data and just they internally say oh no this is less than three and I'm not gonna display it or something.",
},
{
content: "Yeah I mean we can process it in chunks if it gets too big.",
},
{
content: "Hmm Yeah.",
},
{
content: "basically We can just process it all in chunks.",
},
{
content: "it gets too big to load it into memory.",
},
{
content: "No I'm just thinking for this.",
},
{
content: "Hmm.",
},
{
content: "whole thing of like a different level sort of cutting out different different pieces whether we do that through a query where we say give us everything that's above this and this weight or whether we skip the same infrastructure but every individual module like the player and the display say like they still get sort of all the different utterances uh all the different pieces but they say oh this piece I leave out because it's below the current threshold.",
},
]
,
[
{
content: "I.",
},
{
content: "level.",
},
{
content: "think we probably want to store Sorry I think we probably want to store um a hierarchical information density as well So like an density score for each meeting and each topic segment 'Cause otherwise we'd be recalculating the same thing over and over and over again.",
},
{
content: "Yeah that'd be much more efficient to do.",
},
{
content: "Yeah.",
},
{
content: "that Yeah.",
},
{
content: "And that will obviously make it much easier to display.",
},
{
content: "When do we need the one for the.",
},
{
content: "Well it may not for the whole meeting but like.",
},
{
content: "Okay Yeah I guess for the so when we have the display will we display the whole series Then if we have for the individual topic segments within the meetings if we have ready calculated um measures then we don't have to sort of extract that data from the individual.",
},
{
content: "Yeah exactly Yeah.",
},
{
content: "utterances Yeah and that's also fairly easy to store along with our segments isn't it.",
},
{
content: "For the segments are we extracting some type of title for them that we craft with some fancy algorithm or manually or we're just taking the single most highly valued key-word utterance for the segment heading.",
},
{
content: "Well we can start off like that Well I was gonna start off I've got sort of half-way through implementing one that does just I_D_F_.",
},
{
content: "Hmm.",
},
{
content: "And then just I can change that to work on whatever.",
},
{
content: "Hmm It's probably like in in the end probably it wouldn't be the best thing if it's just the most highly ranked phrase or key-word because like for example for an introduction that would most definitely not be anything that has any.",
},
{
content: "Yeah And it should.",
},
{
content: "title anywhere similar to introduction or.",
},
{
content: "something Yeah.",
},
{
content: "be weighted by stuff like the hot spots and um the key-words in the search and.",
},
{
content: "stuff like that.",
},
{
content: "Also like for this part maybe if we go over it with named entity in the end if I mean if one of the people doing DIL has some.",
},
{
content: "Hmm.",
},
{
content: "named entity code to spare and just like at least for the for sort of for finding topics titles for for segments just take a named entity which has a really high what's it called D_F_I_D_F_ whatever 'Cause you'd probably be quite likely if they're talking about a conference or a person that that would be a named entity which is very highly um frequented in that.",
},
{
content: "Did he.",
},
{
content: "part.",
},
{
content: "not say something about named entities So I thought he said there wasn't very many.",
},
{
content: "Yeah he said they're quite sparse.",
},
{
content: "Yeah.",
},
{
content: "So that basically was don't bother basing too much of your general calculation on it But like especially if they're sparse probably individual named entities which describe what a what a segment is about would probably be quite good Like if there's some name of some conference they would could probably say that name of the conference quite often even though he's right that they make indirect references to it.",
},
{
content: "You.",
},
{
content: "Anyway Sorry.",
},
{
content: "uh you said you are currently uh implementing the idea What exactly are.",
},
{
content: "Yeah It's not.",
},
{
content: "you.",
},
{
content: "T_F_I_D_F_ it's just inverse document.",
},
{
content: "Okay Okay.",
},
{
content: "frequency 'Cause it's really easy to do.",
},
{
content: "basically There's just like for a baseline really.",
},
]
,
[
{
content: "Mm-hmm.",
},
{
content: "Yeah you're able to do that in Java yeah.",
},
{
content: "Well I'm half-way through It's not.",
},
{
content: "Yeah.",
},
{
content: "working yet but it will do.",
},
{
content: "So you're doing that on a on a per word level.",
},
{
content: "Um yeah.",
},
{
content: "Okay Okay.",
},
{
content: "And then averaging it over the utterances.",
},
{
content: "But it's not like um related to the corpus at all It's just working on an arbitrary text file at the moment.",
},
{
content: "Okay cool I was just wondering where you had the corpus from at the moment.",
},
{
content: "No.",
},
{
content: "Huh.",
},
{
content: "So it it seems that the data structure isn't a big problem and that basically we don't have to have all these massive discussions of how we exactly interact with the data structure because most of our work isn't done with that data structure in memory in the browser but it's just done off-line and everyone can represent it anyway they want as long as they sort of store it in a useful X_M_L_ representation in the end So.",
},
{
content: "It.",
},
{
content: "like.",
},
{
content: "would be useful to know how everyone's gonna store their things though.",
},
{
content: "Hmm.",
},
{
content: "Yeah that would mean understanding the NITE X_M_L_ X_M_L_ sort of.",
},
{
content: "Yeah Yeah.",
},
{
content: "format in a lot more detail We should I think we should just have a long session in the computer room together and like now that we know a bit more what we want take a closer look.",
},
{
content: "at NITE.",
},
{
content: "Well.",
},
{
content: "X_M_L_.",
},
{
content: "a few hours free Like.",
},
{
content: "Yeah.",
},
{
content: "after this.",
},
{
content: "a.",
},
{
content: "I've had a look at the the topic segments how it's.",
},
{
content: "Mm-hmm Mm-hmm.",
},
{
content: "stored And then yeah those are few per meeting and it um well it gives a time stamp and inside each one there's uh the actual like utterance segments.",
},
{
content: "And the list of them that occurred And they're all numbered Um so that's where that's stored.",
},
{
content: "Good Yeah I haven't looked at this stuff much at all.",
},
{
content: "Yeah so I guess um if I'm gonna be segmenting it with.",
},
{
content: "Yeah Yeah.",
},
{
content: "a L_C_ then that's like same format I'd want to.",
},
{
content: "um put it back out in so it'd be equivalent.",
},
{
content: "Who's who's sort of doing the the the central coordination of of of the browser application now Like.",
},
{
content: "Well like the.",
},
{
content: "Hmm.",
},
]
,
[
{
content: "integration What do you mean integration.",
},
{
content: "Yeah or but also like all these elements like like the loading and yeah integration and and.",
},
{
content: "Hmm.",
},
{
content: "like handling the data loading and stuff.",
},
{
content: "I don't know I don't think anyone's been allocated to do that yet.",
},
{
content: "Nah I'm sort of like I think I'll take over the display just because I've started with a bit and found.",
},
{
content: "Yeah yeah.",
},
{
content: "it.",
},
{
content: "Yeah definitely Hmm yeah.",
},
{
content: "So somebody should sort of be the one person who's who understands most about what's centrally going on with with the with the project like with the with the browser as a whole and where the data comes in and.",
},
{
content: "Any volunteers.",
},
{
content: "It's the most boring task.",
},
{
content: "Mm-hmm.",
},
{
content: "It's also a complicated one.",
},
{
content: "Yeah.",
},
{
content: "Yeah.",
},
{
content: "could be difficult yeah.",
},
{
content: "Yeah I know but uh I guess we can do it like several people together it's probably just those people have to work together a lot and very closely and just make sure that they're always understand what the other one is doing.",
},
{
content: "Yeah Well I guess the important thing is to get the crucial modules built.",
},
{
content: "Or at least.",
},
{
content: "yeah.",
},
{
content: "um simple versions of them.",
},
{
content: "Yeah or.",
},
{
content: "Yeah and.",
},
{
content: "or ready-made versions of them for that matter and.",
},
{
content: "Yeah and then we'll maybe have to prioritize somebody into just integrating it.",
},
{
content: "Yeah but I think actually like at the moment the integration comes first I mean it's sort of at the moment the building the browser comes first and then only comes the creating new sophisticated data chunks because that's sort of the whole thing about having a prototype system which is more or less working on on chunk data But it at least we have the framework in which we can then test everything and and look at everything 'Cause before we have that it's gonna be very difficult for anyone to really see how much the work that they're doing is making sense because you just well I guess you can see something from the data that you have in your individual X_M_L_ files files that you create but it would be nice to have some basic system which just displays some stuff.",
},
{
content: "So maybe we should try doing something really simple like just displaying a whole meeting And like just being able to scroll through it or something like that.",
},
{
content: "Or just adapt like their like.",
},
{
content: "Yeah.",
},
{
content: "just sort of go from their system and and adapt that piece for piece and see how we could how we could like adapt it to our system Does anyone want to like just sit with me and like play for three hours with NITE X_M_L_ at some point.",
},
{
content: "Are you free after this.",
},
{
content: "Uh I wouldn't like to be 'cause I'd like to go to the gym I'm theoretically free But if there's any.",
},
{
content: "How.",
},
{
content: "time hmm.",
},
{
content: "about Friday then 'Cause I'm.",
},
{
content: "off all Friday.",
},
{
content: "You have nothing no free time on Wednesday.",
},
{
content: "Uh Wednesday I've got a nine 'til twelve.",
},
{
content: "Hmm Nine 'til twelve and then you have.",
},
]
,
[
{
content: "Yeah nothing in the.",
},
{
content: "or you.",
},
{
content: "afternoon I've got nothing in the afternoon So.",
},
{
content: "Anytime Wednesday afternoon I'd be cool I think.",
},
{
content: "Okay So you yeah Where about just in Appleton Tower.",
},
{
content: "Yo Forrest Hill whatever one's easier to discuss stuff I don't know.",
},
{
content: "Uh I'll be in um the.",
},
{
content: "I'm not.",
},
{
content: "Appleton anyway.",
},
{
content: "Okay What time do you wanna do.",
},
{
content: "Um well I'll be there from twelve I've got some other stuff that needs done on Matlab so if you're not there at twelve I can just work on.",
},
{
content: "Okay so I'll just.",
},
{
content: "that So Yeah.",
},
{
content: "meet you in in eighteen in the.",
},
{
content: "afternoon I guess at the moment nobody critically depends on like the NITE X_M_L_ stuff working right now right Like at the moment you can all.",
},
{
content: "Mm-hmm Yeah I.",
},
{
content: "do your stuff and I can do my L_S_A_ stuff And I can even do the display to a vast degree without actually having their supplying framework working So it's not that crucial.",
},
{
content: "Yeah.",
},
{
content: "think so.",
},
{
content: "I I I would need the raw text pretty soon because I have to find out um how I have to put the segments into.",
},
{
content: "Yeah actually I.",
},
{
content: "bins.",
},
{
content: "need the raw text as well Yeah.",
},
{
content: "then.",
},
{
content: "but I was I was I.",
},
{
content: "Uh.",
},
{
content: "yeah.",
},
{
content: "was.",
},
{
content: "yeah.",
},
{
content: "more thinking of the sort of the the whole browser framework as a running programme.",
},
{
content: "No that's not necessary.",
},
{
content: "now Yeah I think.",
},
{
content: "we all need the raw text in different in different flavours don't we.",
},
{
content: "Hmm Yeah yeah.",
},
{
content: "Why.",
},
{
content: "Jasmine I thought you just said that you'd uh looked at extracting the text.",
},
{
content: "Yes I did But um I've only just got the notes I have to still have uh to order everything by the.",
},
{
content: "Yeah.",
},
{
content: "time and.",
},
{
content: "So you you said you did it in Python yeah.",
},
]
,
[
{
content: "Yeah I think it's quite easy.",
},
{
content: "Yeah did you use.",
},
{
content: "after.",
},
{
content: "uh the X_L_ uh X_M_L_ parser in.",
},
{
content: "Yeah Yeah.",
},
{
content: "Python.",
},
{
content: "So uh Mm-hmm.",
},
{
content: "good So um 'cause yeah I was having a look in it a look at it as well and I.",
},
{
content: "noticed the um the speakers are all in that separate file So did did you have to combine them all and and then re-order them.",
},
{
content: "Yeah I uh that's what I was uh thought That you.",
},
{
content: "Yeah yeah.",
},
{
content: "just combine them and then.",
},
{
content: "order the time stamps accordingly.",
},
{
content: "Right Yeah so that's approach um well I was going to do So yeah we may as well collaborate.",
},
{
content: "Okay Um what I found out was that there are quite a lot of things without without time stamps in the beginning.",
},
{
content: "In the word files.",
},
{
content: "Yeah and uh X_M_L_.",
},
{
content: "Yes but.",
},
{
content: "files Yeah that's just an I_D_ or something I don't know.",
},
{
content: "Yeah everything.",
},
{
content: "Just.",
},
{
content: "that's a word has a time stamp.",
},
{
content: "Yes but what are the other things that's uh some kind of number maybe the file number or something that is in the beginning What is that.",
},
{
content: "I'm not.",
},
{
content: "Do.",
},
{
content: "sure I what you mean.",
},
{
content: "know.",
},
{
content: "Um I think there are quite a lot of numbers in the beginning where there is no time stamp for the numbers It's Think they say um quite a lot of numbers and before that uh um there's this number Was it.",
},
{
content: "But number within the X_M_L_ context.",
},
{
content: "Yeah there are numbers in the um the W_ tag but there are no time stamps.",
},
{
content: "Are they spoken numbers Like do they look like they're utterances.",
},
{
content: "Yeah.",
},
{
content: "numbers There's the number task isn't there That's.",
},
{
content: "That's at.",
},
{
content: "part.",
},
{
content: "the.",
},
{
content: "the whole thing Hmm Okay.",
},
{
content: "end That's at the end I.",
},
{
content: "think her.",
},
{
content: "Yeah.",
},
]
,
[
{
content: "time.",
},
{
content: "beginning as well sometimes I.",
},
{
content: "Oh right.",
},
{
content: "think At least I saw some.",
},
{
content: "maybe Didn't.",
},
{
content: "Hmm Yeah.",
},
{
content: "have a look.",
},
{
content: "Yeah.",
},
{
content: "probably cut that.",
},
{
content: "at our.",
},
{
content: "out anyway for our project I don't know It's probably gonna screw up a lot of our data.",
},
{
content: "Yeah.",
},
{
content: "otherwise.",
},
{
content: "Hmm.",
},
{
content: "If Not sure if it what.",
},
{
content: "Uh I.",
},
{
content: "it does.",
},
{
content: "I think it wouldn't as it occurs I mean it would be it occurs in every meeting So.",
},
{
content: "document It would probably make the yeah if if you have segments for that probably.",
},
{
content: "And.",
},
{
content: "the Okay Uh I'm just.",
},
{
content: "I think it even has uh its own annotation like digits or something So that should be really easy.",
},
{
content: "to cut.",
},
{
content: "thinking.",
},
{
content: "out Yeah I'm.",
},
{
content: "it probably like the L_S_A_ would perform quite well on it It would probably find another number task quite easily seeing that it's a.",
},
{
content: "constrained vocabulary with a high.",
},
{
content: "sure.",
},
{
content: "co-occurrence of the same nine words So that.",
},
{
content: "But what.",
},
{
content: "ten word.",
},
{
content: "it is it actually that.",
},
{
content: "numbers.",
},
{
content: "Hmm Yeah.",
},
{
content: "Ah it's just to test the system I think.",
},
{
content: "Okay so but.",
},
{
content: "So.",
},
{
content: "there are no time stamps.",
},
{
content: "I think it's also.",
},
{
content: "annotated to.",
},
]
,
[
{
content: "something that they they.",
},
{
content: "It's it's.",
},
{
content: "said the numbers in order right.",
},
{
content: "strange.",
},
{
content: "Mm they have to read numbers.",
},
{
content: "Yeah I.",
},
{
content: "from.",
},
{
content: "think it's it the it sounded like they wanted to check out how well they were doing with overlapping and stuff because basically it's like they're reading them at different speeds but you know in which order they are said.",
},
{
content: "Uh I didn't have a look at that.",
},
{
content: "Anyway ICSI has some reasons.",
},
{
content: "So.",
},
{
content: "for doing.",
},
{
content: "Hmm.",
},
{
content: "it They must have been pissed off saying like numbers at the end of every meeting.",
},
{
content: "And also um there are different um combinations of letters B_R_E_ and something like that Is it everything ordered are the time stamps global or uh are they local at any point.",
},
{
content: "Mm I thought they were.",
},
{
content: "They.",
},
{
content: "local to a particular meeting.",
},
{
content: "Okay.",
},
{
content: "Um Dave if you would or actually for well if you're doing I_D_F_s or you whatever you call your your frequencies I always mix up the name uh you need some dictionary for that at some point though like you need to have some representation of a word as not not that specific occurrence of that word token but of of of a given word form Because you're making counts for.",
},
{
content: "Yeah I'm just.",
},
{
content: "word.",
},
{
content: "building a dictionary.",
},
{
content: "right Yeah so we should work together on that because I need a dictionary as well.",
},
{
content: "Oh mine's just gonna use the um hash map one in um Java 'Cause I'm only gonna do it on small.",
},
{
content: "Okay 'Kay.",
},
{
content: "documents It's just like until the information density.",
},
{
content: "is up and running Just something to get give me something to work with.",
},
{
content: "Okay Didn't you say that the.",
},
{
content: "So it's.",
},
{
content: "the.",
},
{
content: "only gonna use quite small documents you see to start with.",
},
{
content: "Yeah but for I'm just wondering for the whole thing Does somebody who was it of you two who said that um there's some programme which spits out a dictionary probably with.",
},
{
content: "Yeah.",
},
{
content: "frequencies.",
},
{
content: "it's Rainbow It's um I think it's just the dictionary in the first place But.",
},
{
content: "Okay Is anyone of you for the for the document frequency over total frequency you gonna have total frequencies of words then with that right Like over the whole corpus sort of.",
},
{
content: "Um.",
},
{
content: "Or.",
},
{
content: "no I have to bin it up and so I will only have counts for each each bin or something.",
},
]
,
[
{
content: "Why does it need to be classified into like different segments.",
},
{
content: "It's because um Rainbow is a text classification system And I think it's not possible to have just one class That's the problem.",
},
{
content: "Can we just fill a second class with junk that we don't care about.",
},
{
content: "Maybe we could Yeah.",
},
{
content: "Like I don't know copies of Shakespeare or.",
},
{
content: "something.",
},
{
content: "sure you sure we could do that but I don't that makes sense.",
},
{
content: "'Cause if what we're looking for is the um frequency statistics I don't see how that would be changed by the classification.",
},
{
content: "If we need just frequencies maybe we should just calculate them.",
},
{
content: "I the.",
},
{
content: "by.",
},
{
content: "using Perl or something I don't know.",
},
{
content: "Well there maybe another tool available.",
},
{
content: "Yeah it's quite easy to just count and or sort.",
},
{
content: "Yeah.",
},
{
content: "them by um frequency.",
},
{
content: "using which tool are you talking about.",
},
{
content: "Just using a Perl script.",
},
{
content: "Be careful with that Like my experience with the British National Corpus was that there's.",
},
{
content: "Is it too.",
},
{
content: "far.",
},
{
content: "big Yeah.",
},
{
content: "word types than you ever think because anything that's sort of unusual generally is a new word type.",
},
{
content: "Like any typo or any strange thing where they put two words together And also any number as a word type of its own So you can easily end up with hundred thousands of words when you didn't.",
},
{
content: "Hmm.",
},
{
content: "expect them So generally dictionaries can grow bigger then you think they do.",
},
{
content: "I don't know how you how many terms you can handle in Perl.",
},
{
content: "Well you can probably also you can probably pre-filter like with regular expressions even just say if it consists of only digits then skip it or.",
},
{
content: "Mm yeah.",
},
{
content: "even.",
},
{
content: "if it consists any special characters then skip it because it's probably something with a dot in between which is usually not something you wanna have and.",
},
{
content: "Um I can't remember who's got it Might be WordNet But one of these big has a list of stop words that you can download and they're just basically lists of really uninteresting boring words that we could filter out before we do that It's like that's one the papers I read that's um one things they did right at the beginning is they've got this big stop-list and they just ignore all of those.",
},
{
content: "What I did for my.",
},
{
content: "throughout the.",
},
{
content: "project I just ignored the hundred most frequent words because they actually end up all being articles and and everything and stuff So we need like several of us need a dictionary Am I the only one who needs it with.",
},
{
content: "Yeah I.",
},
{
content: "frequencies.",
},
{
content: "it would be useful for me as well.",
},
{
content: "Am I the only one who needs it with frequencies Or.",
},
{
content: "It uh I think that'd be useful for me as well Yeah.",
},
]
,
[
{
content: "Frequencies Yeah Well I guess as soon as we have the raw text we can probably just start with the Java hash map and.",
},
{
content: "Yeah Well all you.",
},
{
content: "like just hash map over it and see how far we get I mean we can probably on a machine with a few hundred megabyte RAM you can go quite far You can write it on beefy So even if it goes wrong and even if it has a.",
},
{
content: "million words.",
},
{
content: "really wanna do is look into getting some sub-set of the ICSI corpus off the DICE machines 'Cause I hate working on DICE It's awful Like so I can use my home machine.",
},
{
content: "Oh yeah burning it on a like we should be able to burn the whole.",
},
{
content: "has a C_D_.",
},
{
content: "corpus just the.",
},
{
content: "burner though has a C_D_.",
},
{
content: "hmm.",
},
{
content: "burner.",
},
{
content: "Ah I see I asked support about that two days ago In the Informatics building there oh sorry in in Appleton Tower five the ones closest two machines closest to the support office So I presume oh wait I have the exact email I think he's talking about sort of the ones that.",
},
{
content: "Yeah The right-hand corner far.",
},
{
content: "Yeah if you if you enter the big room in the right-hand corner I.",
},
{
content: "Mm-hmm.",
},
{
content: "Yeah.",
},
{
content: "think Um the thing is like you can only burn from the local file-system So if it's from well actually I think if it's mounted you can directly burn from there but the problem is I have my data on beefy and so I have to get it into the local temp directory and burn it from there But you can burn it from there.",
},
{
content: "How big is it without um.",
},
{
content: "Uh we looked that up.",
},
{
content: "the WAV files and.",
},
{
content: "and I.",
},
{
content: "stuff.",
},
{
content: "that up and I forgot.",
},
{
content: "'Cause I could just say at um going over S_C_P_ one night and just leave it going all night if I had to.",
},
{
content: "Yeah yeah No you you we should be able to get it at I don't think it was I don't think it was a gigabyte.",
},
{
content: "It's yeah I.",
},
{
content: "Hmm See I would.",
},
{
content: "mean the wave data are obviously not gonna get off there.",
},
{
content: "completely Really.",
},
{
content: "I would offer you to to get it on this one and then um like copy it But you know what I figured out I'm quicker down-loading over broad-band into my computer than using.",
},
{
content: "this hard disk.",
},
{
content: "Oh.",
},
{
content: "There's something strange about the way how they access the hard disk how they mount it which is unfortunate.",
},
{
content: "I'll see if I can S_C_P_ it I suppose.",
},
{
content: "Hmm What operating system do you have.",
},
{
content: "I've got a Linux box and a Windows box.",
},
{
content: "Okay.",
},
{
content: "So Broad-band.",
},
{
content: "what connection do you have at home.",
},
{
content: "Yeah So if anyone of us gets it we can then just use.",
},
]
,
[
{
content: "it.",
},
{
content: "an hmm.",
},
{
content: "on to C_D_ I can.",
},
{
content: "if I get.",
},
{
content: "Yeah.",
},
{
content: "down I can.",
},
{
content: "to.",
},
{
content: "put to C_D_.",
},
{
content: "or.",
},
{
content: "yeah put it on on hard disk whatever.",
},
{
content: "Yeah I'm not.",
},
{
content: "Question is if you're not quicker if you uh because you should get massive compression out of that Like fifty percent or something with a good algorithm So if you could compress it and just put it into a.",
},
{
content: "directory Like.",
},
{
content: "sure if.",
},
{
content: "The.",
},
{
content: "Is how much do we get.",
},
{
content: "the usually have for gigabyte three or two The.",
},
{
content: "Really Okay.",
},
{
content: "yeah I like I mean there's not guarantee that anything stays there but overnight it'll stay And I think the usually have Ah yeah but that would have to be the directory off the machine you can S_S_H_ into directory of S_S_H_.",
},
{
content: "Yeah but I can do it from that session can't I You can compress it from a remote session and S_C_P_ it from the same session.",
},
{
content: "Yeah they they'd they'd probably hate you for doing it But They'd probably they'd like you more if you S_S_H_ uh into another computer compress it there and then sort of copy it into the into the gateway machine.",
},
{
content: "Do you think Yeah Oh no.",
},
{
content: "They have um if you S_S_ hey you know if you if you S_S_H_ and they have this big warning about doing nothing at all in the gateway.",
},
{
content: "machine Yeah.",
},
{
content: "no I was thinking of just into some.",
},
{
content: "machine and then just it from there.",
},
{
content: "To your home machine I.",
},
{
content: "Yeah I mean it has to go through the.",
},
{
content: "gateway But.",
},
{
content: "haven't.",
},
{
content: "I haven't figured out how to tunnel through the gateway into.",
},
{
content: "Can you not.",
},
{
content: "another.",
},
{
content: "do that Mm I.",
},
{
content: "yet It's not it's not easy definitely That's why I end up sort of copying stuff into the directory at the gateway.",
},
{
content: "machine.",
},
{
content: "see Yeah.",
},
{
content: "Sorry if this is boring everybody else This is just details and how to get stuff home from what we can probably just look at that together when.",
},
{
content: "we're meeting I'm sorry.",
},
{
content: "'Kay Um I just um wondered so who's uh then doing um the frequencies on on the words because I'm I think I will also um I could also make use of it um for the agreement and disagreement thing Because I um I in my.",
},
]
,
[
{
content: "outline I talked about um using the um discourse acts.",
},
{
content: "Mm-hmm Well.",
},
{
content: "first and um then in the chunks of text I found looking for word patterns and so on So um I would for example need the um most um frequent words So if you.",
},
{
content: "cut.",
},
{
content: "yeah As.",
},
{
content: "off all that I'd won't.",
},
{
content: "be use.",
},
{
content: "soon.",
},
{
content: "or.",
},
{
content: "somebody gives me the raw text of the whole thing I can probably just implement like a five line Java hash table frequency dictionary builder and see.",
},
{
content: "Yeah I I but I need it for my chunks then I would You know.",
},
{
content: "Oh did you not say frequencies of words in the whole sorry did uh.",
},
{
content: "but I'd uh I would like to look at the frequency of words in my um in the regions of text I found out to be interesting So.",
},
{
content: "So you could.",
},
{
content: "I.",
},
{
content: "just.",
},
{
content: "need it It.",
},
{
content: "So.",
},
{
content: "it.",
},
{
content: "you Yeah.",
},
{
content: "would have to be re-calculated.",
},
{
content: "only my.",
},
{
content: "you'd have to.",
},
{
content: "segments.",
},
{
content: "yourself yeah.",
},
{
content: "But first uh how big are the chunks.",
},
{
content: "Huh.",
},
{
content: "How big are the chunks you're looking at.",
},
{
content: "Uh uh mm I think it would be you know as as big at as the hot-spot.",
},
{
content: "So quite small.",
},
{
content: "annotation.",
},
{
content: "then So you could.",
},
{
content: "yeah.",
},
{
content: "just um you could use.",
},
{
content: "utterances.",
},
{
content: "Hmm.",
},
{
content: "just the same thing we used to build the big dictionary You just do that on-line 'cause that won't take long to build a little dictionary that big will it I mean just use the same tool that.",
},
{
content: "Yes Yeah.",
},
{
content: "we.",
},
{
content: "yeah So I would probably just concatenate all.",
},
]
,
[
{
content: "Yeah.",
},
{
content: "my um text chunks and then let's say I will run over it.",
},
{
content: "Oh you don't wanna have different counts for each chunk but just like sort of for for something from old.",
},
{
content: "Yes.",
},
{
content: "chunks Oh yeah no that's yeah so once I write an like if I write like an algorithm which does a hash um table dictionary with frequency from a raw text then the raw text can be anything So how far are we uh how how far are you getting raw text out of it do you think.",
},
{
content: "Uh I can get all the raw text but it has to be ordered still So.",
},
{
content: "Okay well that's good because for the dictionary the order.",
},
{
content: "It doesn't need.",
},
{
content: "doesn't make a.",
},
{
content: "ordered no.",
},
{
content: "it.",
},
{
content: "No it isn't.",
},
{
content: "So yeah so um I'll get that from you and I'll write the hash table which goes over that and creates a dictionary file So for the dictionary is it okay if I do whatever word blank frequency or something Just could everybody sort of start from that I mean I guess we can.",
},
{
content: "Um well that's the are you using T_F_I_D_F_ for the information density.",
},
{
content: "Um it's in what is implemented in Rainbow is information gain and I'm not quite sure how.",
},
{
content: "Alright okay.",
},
{
content: "they calculate that Yeah.",
},
{
content: "Like 'cause frequency would be useful I.",
},
{
content: "think But.",
},
{
content: "Yeah.",
},
{
content: "I I need frequency as well.",
},
{
content: "um depending on the context the size and what we consider a document in the sense of calculating T_F_I_D_F_ is gonna change Which might need thinking about.",
},
{
content: "Well I think we might have a lot in common what we calculate because I for my latent semantic analysis need like counts of words within a document uh within a a segment actually within a topic segment.",
},
{
content: "Uh that's what Rainbow does I think you can just get probabilities for a certain words for each document.",
},
{
content: "Can I.",
},
{
content: "Certain.",
},
{
content: "convert these probabilities back into frequencies.",
},
{
content: "Um we would have to look at that.",
},
{
content: "Okay Oh so that's what Rainbow does because that's what L_S_A_ builds on Like it builds a a.",
},
{
content: "Mm-hmm Oh.",
},
{
content: "document by frequency.",
},
{
content: "matrix So I could probably get that Even though but I already have I already have my code to build it up myself No don't bother I have my code already Um Yeah so Dave you said you need the frequency counts actually.",
},
{
content: "I think it would be useful.",
},
{
content: "for.",
},
{
content: "yeah.",
},
{
content: "per document would you say not for the whole thing.",
},
{
content: "Well you need the raw frequency as well But um you also need how many times things occur within each document And um what we consider a document's gonna depend on our context I think 'Cause if we're looking at the whole lot of meetings we'll consider each meeting a document in sort of terms of this algorithm And if we're viewing like say just a small topic segment you might look at even each utterance as a small document.",
},
{
content: "It more and more appears to me that if we if we scrap the notion of the meeting as an individual thing and sort of see meetings as as topic segments and have sort of like hierarchical topic segmentation instead then it's like a.",
},
{
content: "Yeah but the thing.",
},
{
content: "more.",
},
]
,
[
{
content: "is.",
},
{
content: "framework Wait.",
},
{
content: "um It's gonna need some thought of how we Actually maybe it doesn't actually matter Maybe if you just do it once at the highest level it it will be fine But I was just thinking it might be difficult to calculate the T_F_I_D_F_ off-line for all the different levels we might want 'Cause if we're gonna allow disjoint segments for example then how are we gonna know what's gonna be in context at any given time But I suppose if you just did it globally treating a meeting as a document it'd probably still be work out fine because you'd only be.",
},
{
content: "comparing to ones within the.",
},
{
content: "are.",
},
{
content: "context.",
},
{
content: "using this um for the for the for the for the weighting in the end now this this measure you're calculating.",
},
{
content: "Uh I don't know I thought were you gonna use that in the end The information density.",
},
{
content: "Because if we're doing Like I think for for the information density we uh we should calculate it on the lowest level not on the highest But like.",
},
{
content: "Oh.",
},
{
content: "'cause.",
},
{
content: "sorry that's what I mean Like um yeah for each word or whatever but across the whole lot is what I mean by highest level Like across the whole corpus.",
},
{
content: "Yeah but it don't you have to like go sort of like for in a document versus the whole thing Isn't that how it works that you look look.",
},
{
content: "Yeah.",
},
{
content: "at.",
},
{
content: "but you'd probably look at each meeting as a document.",
},
{
content: "I don't think that's a good idea because isn't it like that we expect there to change over with different topic segments more That they talk about something different in each different topic segment.",
},
{
content: "Mm possibly.",
},
{
content: "'Cause that's what relative term frequency is about that like in some context they're talking more about a certain word than in general So that would more be the the topic segments then I.",
},
{
content: "Yeah that's.",
},
{
content: "don't.",
},
{
content: "what I thought as well that.",
},
{
content: "Yeah Yeah Yeah.",
},
{
content: "you that probably the the topic segment level is the most um informative for the words.",
},
{
content: "Are they big enough to get anything.",
},
{
content: "Yeah that's.",
},
{
content: "meaningful.",
},
{
content: "the problem I don't know.",
},
{
content: "of Well.",
},
{
content: "So I'm just wondering if there's ways to abandon the whole concept of of meetings and sort of but just not really treating separate meetings as too much of a separate.",
},
{
content: "entity But.",
},
{
content: "yeah.",
},
{
content: "that is not it's not an issue You just concatenate an X_M_L_ file together but we still want to have like a notion of meetings for the user.",
},
{
content: "Yes definitely.",
},
{
content: "But on algorithmic level whether we actually whether there's some way to just represent meetings as as.",
},
{
content: "Yeah.",
},
{
content: "topics Hmm.",
},
{
content: "sure Yeah you just like whatever you want to look at you just jam together into an X_M_L_ file and that's your meeting even though bits of it may come from all over the place or.",
},
{
content: "whatever I mean I don't see why that's really a big problem.",
},
{
content: "That's not really what I meant But I think I have to think more about what I meant Um I'm confused about everything.",
},
]
,
[
{
content: "So basically what you're saying is you can take an arbitrary amount of data and process it with the same algorithm It doesn't matter conceptually what that data is It could be a meeting it could be two utterances it could be a.",
},
{
content: "Yeah.",
},
{
content: "meeting plus half a meeting from somewhere else.",
},
{
content: "I'm I'm not so concerned about the a meeting plus something else I'm more talking about like yeah the keeping keeping the same algorithm and the same way of handling it and just saying like just this this topic here uh it happens to be like a whole meeting and it has sort of sub-topics so just that sort of topics a hierarchical concept where like a topic where there can be super-topics and topics and the super-topics are in the end what the meetings are but in general at some level super-topics are treated like like topics.",
},
{
content: "I don't think it's very difficult though I mean what you do is you just build an X_M_L_ file and if you want it to get down to the utterances you'd go to the leaves And then if you wanted the next level up you'd go to the parents of those and like just go from like the leaves inwards towards the branch to build up things like um you know when you click on a segment it's gonna have like words or whatever that are important.",
},
{
content: "Hmm Mm I'm not really sure what I.",
},
{
content: "As long.",
},
{
content: "want.",
},
{
content: "as like the algorithms are designed um with it in mind I don't think it's a very big problem.",
},
{
content: "So sorry could describe that again the.",
},
{
content: "Well like say you had um like say for a meeting right you've got like uh say a hierarchy that looks quite big like this And like the utterances come off of here maybe.",
},
{
content: "Mm-hmm Mm-hmm.",
},
{
content: "Then when whatever your algorithm is doing.",
},
{
content: "as long as when you're working with utterances you go for all the leaves like then if you need something next up so like a topic segment you'd go to here But if you were looking at say this one so only went like this Right so you it's same you'd start with the leaves and you go oh I want a topic segment So I go one layer up.",
},
{
content: "Mm-hmm.",
},
{
content: "See and then if you're working with just a topic segment in there it's the only thing you have to worry about And like each time you want a higher level you just need to go up the tree And as long as your algorithm respects that then we can just process any arbitrary X_M_L_ file with whatever hierarchical structure we want.",
},
{
content: "So that would be the series as a whole That would be sort of.",
},
{
content: "A meeting say and that.",
},
{
content: "meetings yeah.",
},
{
content: "would be a.",
},
{
content: "Yeah I'm a I'm a I'm a bit brain-damaged at the moment but I think I'll just sit together with you again and and go through it again.",
},
{
content: "So I think as long as you build an algorithm that respects whatever structure's in the.",
},
{
content: "Hmm.",
},
{
content: "file rather than imposing its own structure.",
},
{
content: "So so I'll is it like is this and this structurally then always.",
},
{
content: "Well no it doesn't.",
},
{
content: "identical So.",
},
{
content: "have to be.",
},
{
content: "can that we can treat it with the same algorithm or.",
},
{
content: "But I mean it could be as many nodes as you want Like this one could be deeper maybe say So then you'd start with all your utterances here and when you go up to get topic segments you go to here here here here here here here That might be a bit confusing though 'cause you have things on different levels.",
},
{
content: "Yeah I'm also not sure how we can go from from bottom-up I have always thought it's like more that oh whatever I'm a can't think of it at the moment Probably this is all too complicated worrying about that at that moment anyway.",
},
{
content: "Mm is there anything else we should discuss.",
},
{
content: "Now have have we have we decided anything are we doing anything.",
},
{
content: "Well Wednesday.",
},
{
content: "Wednesday we are.",
},
{
content: "Yeah Yeah.",
},
{
content: "and looking at their at their implementation in.",
},
{
content: "some more detail to actually understand what's going on.",
},
{
content: "So we'll see if we can get like a mini-browser just displays two things synched.",
},
{
content: "We had two.",
},
]
,
[
{
content: "together of.",
},
{
content: "things from their stuff just to make sure.",
},
{
content: "kind.",
},
{
content: "that we.",
},
{
content: "Yeah.",
},
{
content: "are like understand it we understand it enough to to modify it.",
},
{
content: "Yeah should we not have like a group directory or something where we can put all our code in and that kinda thing.",
},
{
content: "It'd be useful I don't know who you see about that though.",
},
{
content: "Hmm I've gotten.",
},
{
content: "Yep How would we do that By just making like it read write for everyone 'Kay who has most free space on their.",
},
{
content: "Mm-hmm.",
},
{
content: "I have.",
},
{
content: "mm.",
},
{
content: "idea.",
},
{
content: "Same here.",
},
{
content: "I've probably got a reasonable amount because um everything on my DICE account can actually be deleted 'cause I store it all at home as well.",
},
{
content: "Hmm.",
},
{
content: "Well we alternatively we can probably just make another directory on the beefy scratch space I mean that's where I'm having gigabytes and gigabytes of stuff at the moment.",
},
{
content: "Is that guaranteed to stay the.",
},
{
content: "No No Yeah.",
},
{
content: "Yeah we can ask Steve if um we can get space.",
},
{
content: "Maybe you should send a support form.",
},
{
content: "Yeah uh we could.",
},
{
content: "But I think.",
},
{
content: "do that.",
},
{
content: "Just.",
},
{
content: "he sends.",
},
{
content: "we.",
},
{
content: "to the I.",
},
{
content: "some.",
},
{
content: "think if he.",
},
{
content: "space Listen.",
},
{
content: "sends to the port he'd probably be.",
},
{
content: "in a better position Yeah.",
},
{
content: "to.",
},
{
content: "Yeah I'm sure he had to deal with that last year.",
},
{
content: "Yeah 'Cause that'd be really useful is if we had a big directory Especially for transferring.",
},
{
content: "Hmm.",
},
{
content: "stuff Having said that are we allowed to take a copy of the ICSI corpus Something we should probably ask before we do it.",
},
{
content: "I think he said yes to that I think uh that was like in when we were still in the seminar room I asked that once or.",
},
]
,
[
{
content: "Okay Okay.",
},
{
content: "like ask is it possible to get it off and nobody said like people were discussing about the technical practicalities but nobody said anything about being allowed to or not allowed to I mean we have access to it here and I guess it probably means that we we can't give it to anybody else But.",
},
{
content: "but if they give us access to it here sitting on a DICE machine then there shouldn't be a reason why we shouldn't be able to use it on our laptop I personally don't have too many friends who would be too keen on getting it anyway.",
},
{
content: "No me.",
},
{
content: "Yeah right.",
},
{
content: "I have.",
},
{
content: "that really excited pirate copied.",
},
{
content: "neither.",
},
{
content: "thing It annotated meeting data.",
},
{
content: "So shall we sit together tomorrow then as well.",
},
{
content: "Yeah.",
},
{
content: "Uh Okay.",
},
{
content: "Um Jasmine uh um what is um the text you're extracting uh looking like then at the end.",
},
{
content: "Um yeah would it be best At the moment it's it's.",
},
{
content: "Because um.",
},
{
content: "just.",
},
{
content: "I I think it's.",
},
{
content: "of Mm-hmm.",
},
{
content: "actually very similar to what I did for.",
},
{
content: "my um speaker um uh extraction and I think I would perhaps have to change two lines of codes to get you um for each meeting a file that says from um this millisecond to this millisecond there was this sequence of words And so on.",
},
{
content: "Um.",
},
{
content: "So that's just changing two lines of code And it would give you that So.",
},
{
content: "Okay So um you'd do you extract the words the raw text as well.",
},
{
content: "Um.",
},
{
content: "Uh Okay.",
},
{
content: "yeah So far I extracted um the durations.",
},
{
content: "But it's from the words file So I could.",
},
{
content: "Mm-hmm Print out.",
},
{
content: "just um.",
},
{
content: "concatenate um the words instead of the durations and it should I mean Should be very straight-forward I can try to do it and send it to you.",
},
{
content: "Okay Okay.",
},
{
content: "and.",
},
{
content: "that Okay.",
},
{
content: "have a look at it will it make sense for what you want.",
},
{
content: "Huh.",
},
{
content: "So have we already extracted from all the files.",
},
{
content: "Yeah uh I mean it I.",
},
{
content: "Yeah.",
},
{
content: "just let it run over all the files So.",
},
{
content: "Did you also order Mm-hmm.",
},
]
,
[
{
content: "Wait wait wait.",
},
{
content: "Yes I.",
},
{
content: "Um sorry Yeah sorry.",
},
{
content: "Uh I ordered according to the um starting times.",
},
{
content: "Hmm.",
},
{
content: "of the utterances.",
},
{
content: "What I just realised we should really keep different completely separate for virtually all purposes Just let's be careful about that because.",
},
{
content: "What do you mean by.",
},
{
content: "like the the ICSI corpus isn't isn't one meeting series it's.",
},
{
content: "Hmm.",
},
{
content: "several meeting series with different people meeting for completely different things.",
},
{
content: "Yeah I mean I I have one what I give you would be one file for each meeting.",
},
{
content: "For each meeting Alright.",
},
{
content: "Yeah not for each.",
},
{
content: "Okay but.",
},
{
content: "I.",
},
{
content: "like let's.",
},
{
content: "yet Yeah one.",
},
{
content: "just be careful that whatever we sort of we merge together that like the highest level of merging it's not the whole ICSI corpus but individual series.",
},
{
content: "Hmm.",
},
{
content: "group yeah.",
},
{
content: "Might be funny to see what is summarised the whole corpus as.",
},
{
content: "I think we might actually I think.",
},
{
content: "anyway I think it'd be very useful But.",
},
{
content: "That's probably be somewhere like well or something like it Um I think we might just get away with for the whole project just like looking at only one series and just doing within one series I mean you can do everything you want in one.",
},
{
content: "Yeah I.",
},
{
content: "series Oh yeah let's.",
},
{
content: "mean there's one series that has just one.",
},
{
content: "That sounds good.",
},
{
content: "take that.",
},
{
content: "meeting Yes.",
},
{
content: "Is the is the data always clearly split up by different series Uh like is it easy to just.",
},
{
content: "pick one Okay.",
},
{
content: "Um the you you the data is of the form you have um three identification letter So.",
},
{
content: "B_E_D_ or B_B_D_ or something.",
},
{
content: "Okay Okay.",
},
{
content: "and that's always the same group And.",
},
{
content: "then after that there's um a number like O_O_ one O_O_ two So it's.",
},
{
content: "Okay So at at every level everyone has to be careful to really just take even at the highest level just take stuff from one series and not merge stuff from different series.",
},
{
content: "Yeah but.",
},
]
,
[
{
content: "together.",
},
{
content: "Hmm.",
},
{
content: "that's that's.",
},
{
content: "because they would.",
},
{
content: "really quite easy to see.",
},
{
content: "just.",
},
{
content: "because they're named.",
},
{
content: "so.",
},
{
content: "so so like if even if we make one single text file which has the whole corpus sort of our corpus that would still be from one series only but it what you're producing at the moment is like individual text files that sort of have the raw text for a whole a meeting as a whole or.",
},
{
content: "Yes But I I mean as um the uh start times.",
},
{
content: "Mm-hmm Yeah.",
},
{
content: "um start for each meeting at zero you could just probably just um add the um final second time to the next meeting and so on and just put it all together But then.",
},
{
content: "we would have to change um the information about who on which channel it was set um to by which person it was set And that is actually stored in another X_M_L_ document.",
},
{
content: "Hmm.",
},
{
content: "'Kay Um so is is anybody creating an uh a real raw text thing at the moment like which is just the words.",
},
{
content: "Yeah that's what I'm gonna need.",
},
{
content: "Yeah 'cause that's what I'm.",
},
{
content: "Yeah I.",
},
{
content: "gonna need.",
},
{
content: "would then just not print out the um.",
},
{
content: "Yes Yeah.",
},
{
content: "start and end.",
},
{
content: "But but.",
},
{
content: "it's just.",
},
{
content: "times.",
},
{
content: "if there uh.",
},
{
content: "changing.",
},
{
content: "Okay.",
},
{
content: "bit.",
},
{
content: "aren't like so it's it's start and end times just for the file Like is it just the first and the last line Or is it for every single thing in.",
},
{
content: "for every single word Or.",
},
{
content: "We can.",
},
{
content: "for single utterance.",
},
{
content: "change the code.",
},
{
content: "Yeah.",
},
{
content: "Yeah that depends what.",
},
{
content: "So what.",
},
{
content: "you want.",
},
{
content: "you mean.",
},
{
content: "by just not print out that.",
},
]
,
[
{
content: "Yeah but I do it with Perl it's just string manipulation So I would I.",
},
{
content: "Okay.",
},
{
content: "mean I would just Sure.",
},
{
content: "If you're into it can you make a text file which just like makes just the.",
},
{
content: "words 'Kay Do you want it straight flowing 'cause I would need something that marks the end of uh of uh is is yours segmented by topics then that like is there any information that you have to the topic to the automated.",
},
{
content: "No I didn't do a no.",
},
{
content: "topic.",
},
{
content: "segmentation Oh then I need something different later anyway Okay but.",
},
{
content: "No but.",
},
{
content: "for now.",
},
{
content: "uh that's what M_L_C_ does It it marks the end of each segment.",
},
{
content: "Okay You're gonna put that as an output of yours the.",
},
{
content: "Yeah Yeah.",
},
{
content: "segmentation Okay so for now can you create like sort of just uh a dump which is pure text just pure text so that I can get a dictionary and you can work on that for your topic.",
},
{
content: "segmentation And.",
},
{
content: "And you would want that all in one file for all the corpus Or.",
},
{
content: "Or for for the series But I.",
},
{
content: "For the series.",
},
{
content: "can but I can.",
},
{
content: "also deal with separate files I mean I can just write the algorithm that it loads all files in a directory or something But I mean if you.",
},
{
content: "Yeah I can directly put it into.",
},
{
content: "But if you can.",
},
{
content: "uh.",
},
{
content: "put.",
},
{
content: "like.",
},
{
content: "it in one single mega-file that would be quite useful for me.",
},
{
content: "Oh.",
},
{
content: "So uh only words um per meeting series.",
},
{
content: "Even though for you wouldn't it be easier if you had different files because then you sort of.",
},
{
content: "Yeah.",
},
{
content: "know like Yeah So.",
},
{
content: "Yeah for me it's better if they're by.",
},
{
content: "meeting.",
},
{
content: "give give me different files as long as like it if you could name them in a way that is easy.",
},
{
content: "Uh-huh Yes.",
},
{
content: "to enumerate over them like whatever one two three four five or something Or.",
},
{
content: "just anything that I can.",
},
{
content: "Yeah they will just I will just take I would uh take over the names they have anyway.",
},
{
content: "Yeah Is is it something that's easily like to enumerate over Is it some just some.",
},
{
content: "Yeah yeah Yeah.",
},
]
,
[
{
content: "ordered pattern Okay.",
},
{
content: "one series has the um same three starting letters So.",
},
{
content: "Okay cool Yeah.",
},
{
content: "So only words and words and times And.",
},
{
content: "Uh.",
},
{
content: "you.",
},
{
content: "I don't need the times I just need the words But um.",
},
{
content: "In the right order.",
},
{
content: "Yeah you want.",
},
{
content: "Yeah in.",
},
{
content: "it ordered Okay Okay.",
},
{
content: "right order.",
},
{
content: "It's just a wish.",
},
{
content: "anybody.",
},
{
content: "Yes.",
},
{
content: "list Orders.",
},
{
content: "Um base dot times Yeah and do you want Yeah sometimes they're contained in one another So.",
},
{
content: "Yeah that doesn't matter too much I.",
},
{
content: "Just after.",
},
{
content: "think.",
},
{
content: "mm-hmm 'Kay Ordered Only words.",
},
{
content: "When do you think you'll have um like a primitive segmentation by some ready-made topic segmentation by some ready-made tool ready.",
},
{
content: "Then that'll be really easy to do once they've got the raw text It's just a case.",
},
{
content: "Okay.",
},
{
content: "of running the script.",
},
{
content: "Okay cool 'Cause I'll need that then when it's done.",
},
{
content: "Yeah I mean hopefully this week.",
},
{
content: "Okay Mm-hmm.",
},
{
content: "Um and I think um for all the corpus it's just from I know from other times it's um nine.",
},
{
content: "byte to have I mean be should be.",
},
{
content: "Is that it That's.",
},
{
content: "to have.",
},
{
content: "quite good.",
},
{
content: "words Should be.",
},
{
content: "What's what's nine megabyte The the.",
},
{
content: "um all the words together um for all the meetings.",
},
{
content: "Alright.",
},
{
content: "That sounds quite reasonable That's nine nine.",
},
{
content: "That's what I'm guessing that's you know.",
},
{
content: "characters.",
},
]
,
[
{
content: "um what.",
},
{
content: "okay.",
},
{
content: "I because nine mega-byte is what I got for when I said for every um utterance this is goes from there to there and.",
},
{
content: "Okay Okay That is for are.",
},
{
content: "takes takes.",
},
{
content: "we are.",
},
{
content: "seconds.",
},
{
content: "particular series at the moment Or.",
},
{
content: "And we could.",
},
{
content: "Oh Yeah I mean.",
},
{
content: "Yes.",
},
{
content: "I'm it doing it for all of it Doesn't matter.",
},
{
content: "Okay Yeah Yeah I guess we can probably process the data for all different series and then check which series is the best for.",
},
{
content: "Yeah.",
},
{
content: "the presentation It sounds quite reasonable nine megabyte I mean if you think if it's roughly a million words and nine.",
},
{
content: "Yeah I mean I.",
},
{
content: "characters per word.",
},
{
content: "hope it will be the same for the words It's just what I.",
},
{
content: "Yeah Yes I'm gonna build a dictionary then from that Like just a list of the words that maybe a list of the words with the frequencies or a list of the words.",
},
{
content: "I.",
},
{
content: "sorted alphabetically or numerically What what does anyone want Does this there any wishes for dictionaries.",
},
{
content: "I could just use it with the frequency I think until the information density thing's finished That would be really useful.",
},
{
content: "Hmm.",
},
{
content: "Mm-hmm Mm.",
},
{
content: "So I'll.",
},
{
content: "So so um I will probably send um just one file of the first meeting um to all those who need it so that you can have a look whether.",
},
{
content: "Add add the.",
},
{
content: "that's.",
},
{
content: "structure yeah And.",
},
{
content: "Mm-hmm.",
},
{
content: "then the actual file we can probably like copy from your home directory or something like it.",
},
{
content: "Yeah I mean if it's just for one meeting it's really not too big.",
},
{
content: "Yeah yeah but I'm I'm saying for the whole thing in the end Then like the.",
},
{
content: "Yeah.",
},
{
content: "big thing we probably shouldn't do by email Yeah.",
},
{
content: "How long would it take to make the frequency counts with a Java hash table.",
},
{
content: "Oh from the time I get the file I can do that in an afternoon the next sort of the next.",
},
{
content: "Yeah.",
},
{
content: "morning Oh you mean how long processing time it takes.",
},
{
content: "No how long you would have to program.",
},
]
,
[
{
content: "Ah.",
},
{
content: "something Okay.",
},
{
content: "it's a it's a bog standard algorithm I've I've sort of I've written it for for DIL just in half an hour or something.",
},
{
content: "similar It's just you put them in a hash table and and say well if it exists already in the hash table then you increase the count by one and.",
},
{
content: "Mm.",
},
{
content: "I'll probably implement some filter for filtering out numbers or something.",
},
{
content: "Because it's quite easy in Perl as well it's just a line of code for counting all the words.",
},
{
content: "Really How do you do.",
},
{
content: "and.",
},
{
content: "that.",
},
{
content: "it's by hashes Yeah.",
},
{
content: "Okay well I don't know any Perl I mean.",
},
{
content: "if anyone wants to do a Perl script for that that does.",
},
{
content: "Yeah 'Kay.",
},
{
content: "it does it nicely I uh I've no problem with that I but I think I have the Java code virtually ready because for DIL I wrote.",
},
{
content: "something very similar Like for DIL I wrote something that counts the the different occurrences of all the tags.",
},
{
content: "If.",
},
{
content: "um Sorry.",
},
{
content: "you're doing it in Java could you um serialize the output as well as writing it to a.",
},
{
content: "file If you're doing it in Java could you serialize the um.",
},
{
content: "The hash table Uh I've never serialized.",
},
{
content: "dictionary yeah as well as writing it to a file.",
},
{
content: "It's really easy.",
},
{
content: "anything.",
},
{
content: "Wouldn't that be absolutely massive though.",
},
{
content: "I don't see why it'd be any more massive than the file.",
},
{
content: "And then and then write the serialization to a.",
},
{
content: "Yeah It.",
},
{
content: "file So you want like a like a file which is the serialization of a.",
},
{
content: "hash table.",
},
{
content: "just.",
},
{
content: "saves you parsing the um.",
},
{
content: "Okay.",
},
{
content: "file representation of it And now 'cause I would be using it in Java anyway So I'd just be building the data structure again.",
},
{
content: "Yeah I I'll I'll check if I understand how it works I mean otherwise I can give you the code for loading a dictionary Give you my my it's just it's it's sort of it's a line break separated file you.",
},
{
content: "Yeah but it.",
},
{
content: "know.",
},
{
content: "seems like a bit silly to be parsing it over and over again kinda thing.",
},
{
content: "Yeah Yeah I'll see if I understand how to serialize There's a there's a serialise command so that gives me one mega mother of.",
},
{
content: "would've.",
},
]
,
[
{
content: "a.",
},
{
content: "thought that um I think all the collections and things implement serializable already.",
},
{
content: "Yeah but do they automatically write to the file anyway I'll I'll figure.",
},
{
content: "I think.",
},
{
content: "that.",
},
{
content: "they might.",
},
{
content: "We don't.",
},
{
content: "do Tonight.",
},
{
content: "Yes is that pretty much pretty much it So Dave and me look at how NITE X_M_L_ works and.",
},
{
content: "we're.",
},
{
content: "I'll try and um I'll either work some more on uh the T_F_I_D_F_ summarizer or do the audio thing.",
},
{
content: "Hmm I'll build a dictionary as soon as I get the text And yeah so that When do we have to meet again then with this.",
},
{
content: "Don't know Suppose we're just getting on with all our.",
},
{
content: "Yeah.",
},
{
content: "components So.",
},
{
content: "How are we gonna do a demonstrator next week My God.",
},
{
content: "we have to demonstrate something next.",
},
{
content: "know.",
},
{
content: "week.",
},
{
content: "What do we have to demonstrate.",
},
{
content: "No no not demonstrate but like didn't you say that uh didn't we sort of agree that it would be useful to have a demonstrator of it like some primitive thing working next week.",
},
{
content: "Yeah Yeah he suggested that we could have an uh initial prototype.",
},
{
content: "That's gotta be very prototype.",
},
{
content: "I.",
},
{
content: "Yeah.",
},
{
content: "I'd I'd be surprised if we can get anything working by next week.",
},
{
content: "Mm-hmm Ah well let's go Sorry.",
},
{
content: "Alright.",
},
{
content: "I feel like like hanging mid-air and not really like finding a point where you can get your teeth into it and start working properly.",
},
{
content: "Yeah I know.",
},
{
content: "and so it's all so fuzzy the whole.",
},
{
content: "I think it's 'cause we had to specify it ourselves that it's not as um like focus the specification of most um.",
},
{
content: "Yeah but.",
},
{
content: "work.",
},
{
content: "it at the.",
},
{
content: "to do Yeah.",
},
{
content: "moment but at the moment it's also an implementational level Like with the data structures I'm just like over these vague ideas of some.",
},
{
content: "trees I'm.",
},
{
content: "Once we start doing it it will all become more or less obvious I think anyway.",
},
]];

export const dummyTitles = [
"Meetings to Evaluate and Influence",
"Notes for the HCI course",
"Governance Cadence Meetings",
"the Sales Team Check-In Meeting",
"the Project Status Meeting",
"the Client Check-In",
"Career and personal development",
"Individual accountability",
"Relationship maintenance",
"the Manager-Employee One-on-One",
"a Coaching Session",
"a Mentorship Meeting",
"Learning: gain insight",
"Develop confidence",
"Generate recommendations for change",
"Project and Agile Retrospectives",
"After Action Reviews and Before Action Reviews (Military)",
"Pre-Surgery Meetings (Healthcare)",
"Win/Loss Review (Sales)",
"Strategic definition and oversight",
"Regulatory compliance and monitoring",
"Relationship maintenance",
"Board Meetings",
"Quarterly Strategic Reviews",
"QBR (a quarterly review between a vendor and client)",
"Create a whole bunch of ideas",
"Ad Campaign Brainstorming Session",
"User Story Brainstorming",
"Fundraiser Brainstorming",
"Commitment and clarity on execution",
"One or more tangible results; real work product comes out of workshops",
"Project, Program and Product Kickoffs",
"Team Chartering",
"Design Workshops",
"Incident Response",
"Strategic Issue Resolution",
"Major Project Change Resolution",
"A documented decision",
"Commitment to act on that decision",
"New Hire Decision",
"Go/No-Go Decision",
"Logo Selection",
"Final Approval of a Standard",
"QBR (a quarterly review between a vendor and client)",
"a Coaching Session",
"a Mentorship Meeting",
"the Check In with an Important Stakeholder",
"Known participants",
"Led by either party",
"Conversational engagement",
"Relationship quality critical",
"Very loosely formatted",
"Surprises neither welcome nor discouraged",
"Maintain project momentum",
"Ensure mutual accountability",
"the Project Status Meeting",
"the Client Check-In",
"the Portfolio Performance Review",
"Known participants",
"Led by a project lead",
"Structured engagement",
"Relationship quality less important",
"Structure varies by team and project",
"Surprises unwelcome",
"Learning: gain insight",
"Develop confidence",
"Generate recommendations for change",
"Project and Agile Retrospectives",
"After Action Reviews and Before Action Reviews (Military)",
"Pre-Surgery Meetings (Healthcare)",
"Win/Loss Review (Sales)",
"Known participants",
"Led by a team lead",
"Highly structured engagement",
"Relationship quality important",
"Structure varies by team and project",
"Meetings may be very ritualistic",
"Serendipity expected in the form of lessons learned",
"Create plans",
"Secure commitment to implementing the plans",
"Strategic Planning",
"Campaign Planning (Marketing)",
"Product Roadmap Planning",
"Participants assembled to fit need",
"Led by a team lead",
"Collaborative engagement",
"Relationship quality less important",
"Structure varies by team and project",
"Serendipity invited",
"Group formation",
"Commitment and clarity on execution",
"One or more tangible results; real work product comes out of workshops",
"Project, Program and Product Kickoffs",
"Team Chartering",
"Design Workshops",
"Value Stream Mapping",
"Team Building workshops",
"Participants assembled to fit need",
"Led by a facilitator",
"Structured collaborative engagement",
"Relationship quality less important",
"Bespoke meeting design",
"Highly planned and organized",
"Serendipity a goal",
"Ad Campaign Brainstorming Session",
"User Story Brainstorming",
"Fundraiser Brainstorming",
"Participants assembled to fit need",
"Led by a facilitator or group leader",
"Collaborative engagement",
"Relationship quality less important",
"Loosely structured, abides by the governing rules for brainstorming",
"Serendipity the point",
"Find a solution to a problem",
"Secure commitment to enact the solution",
"Incident Response",
"Strategic Issue Resolution",
"Major Project Change Resolution",
"Participants assembled to fit need",
"Led by a team leader",
"Structured collaborative engagement",
"Relationship quality important; safety in the conversation more important than relationships",
"Structured and formalized",
"Serendipity the point",
"A documented decision",
"Commitment to act on that decision",
"New Hire Decision",
"Go/No-Go Decision",
"Logo Selection",
"Final Approval of a Standard",
"Participants assembled to fit need",
"Led by a team leader, chair, or facilitator",
"Structured collaborative engagement",
"Relationship quality important; safety in the conversation more important than relationships",
"May be formally structured or not",
"Surprise unwelcome; everyone is expected to arrive fully prepared",
"A new agreement",
"Commitment to further the relationship",
"Support Team Escalation",
"Contract Negotiations and Renewals",
"Neighbor Dispute",
"Participants represent different interests",
"Led by a negotiator or one of the parties",
"Civil engagement",
"Relationship quality important to success",
"Structure depends on the situation",
"Surprise unwelcome but expected",
"Job Interviews",
"Project Discovery Meetings",
"Incident Investigations",
"Market Research Panels",
]